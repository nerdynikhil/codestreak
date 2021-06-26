import Head from 'next/head'
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, ImageView, MenuItem, IconButton } from "@material-ui/core";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import TodayIcon from '@material-ui/icons/Today';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HeatMap from "react-heatmap-grid";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Datetime from 'react-datetime';
import Date from 'react-datetime';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';


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
      <AppBar position="static">  
        <Toolbar>
          <DeveloperModeIcon />
          <Typography variant="h5">Codestreak</Typography>
          <PersonIcon/>
          nerdynikhil
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
            <div align="center">
            <GitHubIcon/>
            <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" width="25" height="25"></img>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX///9PgcH/1ACuDwpHfL+ctNj/0QD/9typAADv3NxhjMatBAD/4XTTl5f/1zC0NDI9d72Co9Fpksm6y+Tc5fGnvd08dr3T3u7/7a///vr++vpWhsPo7vawxOGhudv/5YP/9tP/66P/1x7/54r/88X/3E7/32L//fT/4m//8Lz/2z/57u3lwcHZoaDpy8verayzHxq9SEbJc3G8TErQh4XNgYD/++nEZmXfsrH15eW+U1H/6Zfu1dTjurog84EPAAADgUlEQVR4nO3da1PaQBSA4RgiRoKaCwHlUsQrAiqI99r//7eaYBFnOrPZPR2bbPu+n83OPnMW+GTWcYiIiIiIiIiIiIiIiP6LWmkUN1TFUdoqe5N/UNILPW9LneeFvaTsjQprNYp0H8qGlXNM2pq+vLaFY0xNgBkxLXvDpiWhEXBrK7Rsin1TYEbsl71po2LdL5lNXlz2pk3qmI8wG2Kn7G0bFJmPMBtiVPa2DZKMMBti2dvWT3RIrTqmA8khzY7poOyNa/dNKPxW9sa12xYKt8veuHYIEVY/hAirH0KE1Q8hwuqHEGH1Q4iw+iFEWP0QIqx+CBF+VTuHw6ay4ej4yGLh6KRedwvK/uL00lLhmVvIWyNHVgqHmr6V8bzwqFZPeGEAzDopOqmVE47NgK67b5nw0BTo1sdWCS+NgRnxzCahybfMR+pzWi3hkcCXDfHYHuGVZISu27RHOBQBXdce4UQGrD9aIxSOsL6DECFChAgRIkSIECFChAirLZzOrveUXd90bRbezn3fD5Rlf7C4sVU4m/tBTaPAX+xaKbzT870bby0ULn1dX55/b51wqT3Az0SLhPdGE1wRZ1YJ34yBtSDo2iQ0PaOrIe5ZJNw1H2E+RIuED4IRrj6J1gjnImFwb41wKjmkmXBpjVD0Mcya//PCGkKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEitET4FXery/8ff18oVL0LeiAUDhRrSt+pcOA0hUNUbMbphCJh2FEtGoiIwZ3gZoRVF6rNOEKhcs0n2btNnkVXI2SH9Eq5m0hyTL1IueZMNEN/6jgXohkqNyM7pupD6jg1wRCDp+zBR8n9FofqzTix+RC9uGDNZ8EQ/Zf8yVNz4qRgM07ffIhhv2jRhfEQ89dE5ZlfHlB86VNiSgyTwjWngSExWP568sj0N1H1a78ubRsB26nGmrtmxOBg8wrMc5P7nlzVj/2mxITYLp5g3ovJy6L818+Pftcm1sd6d685Tquhe1LDRktzza72qyGD9Wdw3WOz+Nq1/E6y82PNveQlvdAr+lL1vLCnN8D33l6L3l76/gbTh+lvj15eDSf7yibjkd4B3dRKo7ihKo5S3fmtm97eLQ6ULR9+dIvXISIiIiIiIiIiIiIi+sv9BAz60aZU8oTLAAAAAElFTkSuQmCC" width="25" height="25"></img>
            <img src="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg" width="25" height="25"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png" width="25" height="25"></img>
            <img src="data:image/jpeg;base64,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" width="25" height="25"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" width="25" height="25"></img>
            <img src="https://ih1.redbubble.net/image.662995398.2784/pp,840x830-pad,1000x1000,f8f8f8.u3.jpg" width="25" height="25"></img>
            <img src="http://ibassets.s3.amazonaws.com/static-assets/ib-logo-square.png" width="25" height="25"></img>
            </div>
            

          </Container>
          
        </div>
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<TodayIcon />}
            >
              <Date />

              <p>
                Submissions: Github: 5, Codepen:0, Codeforces: 1, Codechef:0, Hackerearth:0, SPOJ: 0, HackerRank: 0, Leetcode: 3, InterviewBit: 1 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"

              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<TodayIcon />}
            >
              <Date />
              <p>
              Submissions: Github: 2, Codepen:0, Codeforces: 0, Codechef:0, Hackerearth:0, SPOJ: 0, HackerRank: 0, Leetcode: 0, InterviewBit: 0 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"

              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<TodayIcon />}
            >
              <Date />
              <p>
                Submissions: Github: 5, Codepen:8, Codeforces: 1, SPOJ: 2
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"

              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<TodayIcon />}
            >
              <Date />
              <p>
                Submissions: Github: 5, Codepen:8, Codeforces: 1, SPOJ: 2
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"

              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<TodayIcon />}
            >
              <Date />
              <p>
                Submissions: Github: 5, Codepen:8, Codeforces: 1, SPOJ: 2
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"

              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<TodayIcon />}
            >
              <Date />
              <p>
                Submissions: Github: 5, Codepen:8, Codeforces: 1, SPOJ: 2
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"

              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<TodayIcon />}
            >
              <Date />
              <p>
                Submissions: Github: 5, Codepen:8, Codeforces: 1, SPOJ: 2
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<ExpandMoreIcon />}
            />
          </VerticalTimeline>
        </div>
        <div align="center">
        <Typography variant="h2">Heatmap</Typography>
        <div style={{ fontSize: "13px" }}>
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
        </div>


      </main>

    </div>
  )
}
