import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Navbar from './Navbar.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: "#534A43",
    margin: "1rem 2rem 1rem 2rem",
    height: "26rem",
  },
  image:{
    backgroundStyle: "cover",
    height: "8rem",
    width:" 8rem",
    margin: "0 auto 0 auto"
  },
  heading: {
    color: "#E79E2A",
    textTransform: "uppercase"
  },
  desc: {
    color: "#D6C8A8",
    "::-webkit-scrollbar": {
      display: "none"
    },
    "-ms-overflow-style": "none"
  },
  subheading: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "0.85rem"
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "2.5rem",
    color: "#E79E2A",
    background: "#534A43",
    borderBottom: "2px solid #E79E2A",
    padding: "2rem 0 2rem 0",
    marginTop: "4rem"
  },
  link: {
    margin: "0 auto 0 auto",
    color: "#E79E2A",
  },
  data: {
    height: "22rem"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
  <>
    <Navbar />
    <Typography variant="h2" className={classes.title}>
      Projects portfolio
    </Typography>
    <Grid container alignContent="space-around" align="center">
    <Grid item xs={12} md={6} lg={3}>
              <Card className={classes.root}>
                <CardActionArea className={classes.data}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                      TEEE Clan
                    </Typography>
                    <Typography gutterBottom variant="h6" className={classes.subheading}>
                      Internship project
                    </Typography>
                    <Typography variant="body2"component="p" className={classes.desc}>
                      Working on sales page for TEEE Clan, an cloth based e-commerce startup.
                    </Typography>
                    <CardMedia
                      component="img"
                      alt="React.Js project"
                      image={require("../images/react.png")}
                      title="react.js project"
                      className={classes.image}
                    />
                    <Typography variant="subtitle1" className={classes.desc}>
                      Created Using: HTML/CSS, React.JS
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" className={classes.link} href="https://github.com/debubaba/TEEE-Clan">
                    Github Link
                  </Button>
                </CardActions>
              </Card>
    </Grid>
      <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.data}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                        Trend analysis and graphing
                      </Typography>
                      <Typography gutterBottom variant="h6" className={classes.subheading}>
                        Internship project
                      </Typography>
                      <Typography variant="body2"component="p" className={classes.desc}>
                        Created a project in python to comb through company employees data and find trends in data transfer time and plot graphs accordingly
                      </Typography>
                      <CardMedia
                        component="img"
                        alt="Python project"
                        image={require("../images/python.png")}
                        title="Python project"
                        className={classes.image}
                      />
                      <Typography variant="subtitle1" className={classes.desc}>
                        Created Using: Python
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" className={classes.link} href="https://github.com/debubaba/Graph-generator-from-Excel-dataset" >
                      Github Link
                    </Button>
                  </CardActions>
                </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.data}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                        Chatbot using socket.io
                      </Typography>
                      <Typography gutterBottom variant="h6" className={classes.subheading}>
                        Independent project
                      </Typography>
                      <Typography variant="body2"component="p" className={classes.desc}>
                        Created a realtime chatbot using Node.js and Socket.io. User account functionality is available.
                      </Typography>
                      <CardMedia
                        component="img"
                        alt="Node.js project"
                        image={require("../images/node.png")}
                        title="Node.JS project"
                        className={classes.image}
                      />
                      <Typography variant="subtitle1" className={classes.desc}>
                        Created Using: HTML/CSS, Node.JS, Socket.io
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" className={classes.link} href="https://github.com/debubaba/Chatbot-using-socket.io">
                      Github Link
                    </Button>
                  </CardActions>
                </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.data}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                        CCS Timer
                      </Typography>
                      <Typography gutterBottom variant="h6" className={classes.subheading}>
                        Chapter project
                      </Typography>
                      <Typography variant="body2"component="p" className={classes.desc}>
                      Created a countdown timer for IEEE Computer Society Core Committee
                      Selections web portal.

                      </Typography>
                      <CardMedia
                        component="img"
                        alt="html project"
                        image={require("../images/html.png")}
                        title="html project"
                        className={classes.image}
                      />
                      <Typography variant="subtitle1" className={classes.desc}>
                        Created Using: HTML/CSS, Bootstrap, Javascript
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" className={classes.link} href="https://github.com/debubaba/IEEE-CS-CCS-2019-Timer">
                      Github Link
                    </Button>
                  </CardActions>
                </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.data}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                      Todo list
                      </Typography>
                      <Typography gutterBottom variant="h6" className={classes.subheading}>
                        Independent project
                      </Typography>
                      <Typography variant="body2"component="p" className={classes.desc}>
                        Created a todo list using Node.js and Express.js. The project remembers the list so can be opened anytime and anywhere.
                      </Typography>
                      <CardMedia
                        component="img"
                        alt="Node project"
                        image={require("../images/node.png")}
                        title="Node project"
                        className={classes.image}
                      />
                      <Typography variant="subtitle1" className={classes.desc}>
                        Created Using: HTML/CSS, Node.JS, Express.JS, Javascript
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" className={classes.link} href="https://github.com/debubaba/Todo-list">
                      Github Link
                    </Button>
                  </CardActions>
                </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.data}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                        Hackbattle
                      </Typography>
                      <Typography gutterBottom variant="h6" className={classes.subheading}>
                        Chapter project
                      </Typography>
                      <Typography variant="body2"component="p" className={classes.desc}>
                       Created a website for Hackbattle Hackathon using React.js and Sass
                      </Typography>
                      <CardMedia
                        component="img"
                        alt="React.js project"
                        image={require("../images/react.png")}
                        title="React.JS project"
                        className={classes.image}
                      />
                      <Typography variant="subtitle1" className={classes.desc}>
                        Created Using: HTML/CSS, React.JS, Sass
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" className={classes.link} href="https://github.com/debubaba/HackBattle">
                      Github Link
                    </Button>
                  </CardActions>
                </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.data}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                        Smart waste detector
                      </Typography>
                      <Typography gutterBottom variant="h6" className={classes.subheading}>
                        Hackathon project
                      </Typography>
                      <Typography variant="body2"component="p" className={classes.desc}>
                        Created a website to display the types of waste dropped into a dustbin and also the current capacity.
                      </Typography>
                      <CardMedia
                        component="img"
                        alt="HTML project"
                        image={require("../images/html.png")}
                        title="HTML project"
                        className={classes.image}
                      />
                      <Typography variant="subtitle1" className={classes.desc}>
                        Created Using: HTML/CSS
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" className={classes.link} href="https://github.com/debubaba/code2createHack">
                      Github Link
                    </Button>
                  </CardActions>
                </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.data}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                      MeDetect
                      </Typography>
                      <Typography gutterBottom variant="h6" className={classes.subheading}>
                        Hackathon project
                      </Typography>
                      <Typography variant="body2"component="p" className={classes.desc}>
                      Created a website to host ml models to detect various diseases such as
Parkinson, Diabetes, Brain haemorrhage and Breast Cancer
                      </Typography>
                      <CardMedia
                        component="img"
                        alt="Python project"
                        image={require("../images/python.png")}
                        title="Python project"
                        className={classes.image}
                      />
                      <Typography variant="subtitle1" className={classes.desc}>
                        Created Using: HTML/CSS, Bootstrap, Python(Flask)
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" className={classes.link} href="https://github.com/debubaba/MeDetect">
                      Github Link
                    </Button>
                  </CardActions>
                </Card>
      </Grid>
    </Grid>

  </>
  );
}
