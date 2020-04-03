import React from 'react';
import {
  Button,
  Grid,
  Icon
} from '@material-ui/core';
import {
  Instagram,
  LinkedIn,
  Twitter
} from '@material-ui/icons';
import { loadCSS } from 'fg-loadcss';

function SocialTray(){
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  return(
    <>
      <Grid container style={{margin: "0.5rem 0"}}>
        <Grid item xs={3} align="center">
          <Button
          style={{borderRadius: "50%"}}
          href="https://www.instagram.com/expiremedaddy/">
            <Instagram style={{ color: "#D6C8A8", margin: "1rem" }} />
          </Button>
        </Grid>
        <Grid item xs={3} align="center">
          <Button
          style={{borderRadius: "50%"}}
          href="https://www.linkedin.com/in/siddharth-deb-06698818b">
            <LinkedIn style={{ color: "#D6C8A8", margin: "1rem" }} />
          </Button>
        </Grid>
        <Grid item xs={3} align="center">
          <Button
          style={{borderRadius: "50%"}}
          href="https://github.com/debubaba">
            <Icon className="fab fa-github" style={{ color: "#D6C8A8", margin: "1rem" }} />
          </Button>
        </Grid>
        <Grid item xs={3} align="center">
          <Button
          style={{borderRadius: "50%"}}
          href="https://twitter.com/jham_unda?s=08">
            <Twitter style={{ color: "#D6C8A8", margin: "1rem" }}/>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default SocialTray
