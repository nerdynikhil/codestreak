import Head from 'next/head'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HeatMap from "react-heatmap-grid";


const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);

// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );


export default function Home() {
  return (
    <div>
      <Head>
        <title>Codestreak - Better than her Snapstreaks</title>
      </Head>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <DeveloperModeIcon />
          <Typography variant="h5">Codestreak</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Your streak from synced profiles.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Setup once, and you're ready to go!
            </Typography>
          </Container>
        </div>
        <div id="heatmap" style={{ fontSize: "13px" }}>
          <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            xLabelsLocation={"bottom"}
            xLabelsVisibility={xLabelsVisibility}
            xLabelWidth={60}
            data={data}
            squares
            height={45}
            //onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
            cellStyle={(background, value, min, max, data, x, y) => ({
              background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
              fontSize: "11.5px",
              color: "#444"
            })}
            cellRender={value => value && <div>{value}</div>}
          />
        </div>
      </main>
    </div>
  )
}
