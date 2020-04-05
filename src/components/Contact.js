import React, { Component } from 'react';
import {
  Typography,
  Box,
  Divider,
  Card,
  CardMedia,
  Grid
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Particles from 'react-particles-js'

import Navbar from './Navbar.js'
import SocialTray from './socialTray.js'

const useStyles = makeStyles({
  heading: {
    color: "#E79E2A",
    padding: "3rem 0",
    textTransform: "uppercase",
    background: "#534A43",
    borderBottom: "2px solid #E79E2A",
    textAlign: "center",
    marginTop: "3.5rem"
  },
  card: {
    background: "#534A43",
    padding: "0 0.5rem 0.5rem 0",
    margin: "auto",
    borderRadius: "5%",
    maxHeight: "fit-content",
    maxWidth: "fit-content",
  },
  image: {
    borderRadius: "5%",
    maxWidth: "25rem"
  },
  title: {
    color: "#E79E2A",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "2rem 0 1rem 0"
  },
  item: {
    padding: "1rem",
  },
  info: {
    color: "#D6C8a8",
    textAlign: "center",
    padding: "0 0 2rem 0"
  },
  divide: {
    background: "#1A474C",
  }
});

function Contact() {

    const classes = useStyles();
    return(
      <>
          
        <Navbar />
        <Box variant="div" style={{fontFamily: "'Montserrat', sans-serif"}}>
          <Typography variant="h4" className={classes.heading}>
            Contact Me
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.item}>
            <Card className={classes.card}>
              <CardMedia
              component="img"
              image={require('../images/contactPic.jpg')}
              title="It's ya boi"
              className={classes.image}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            <Typography variant="h3" className={classes.title}>
              Mail me
            </Typography>
            <Typography variant="h6" className={classes.info}>
              deb_siddharth@yahoo.com
            </Typography>
            <Divider className={classes.divide} />
            <Typography variant="h3" className={classes.title}>
              Text me
            </Typography>
            <Typography variant="h6" className={classes.info}>
              +91 9833770595
            </Typography>
            <Divider className={classes.divide} />
            <SocialTray />
          </Grid>
        </Grid>
      </>
    );
}
export default Contact
