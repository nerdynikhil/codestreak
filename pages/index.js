import Head from 'next/head'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

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
      
    </div>
  )
}
