import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {
  Typography,
  Avatar,
  Grid,
  Box,
  Button
} from '@material-ui/core'
import Typed from "react-typed"
import {Link} from 'react-router-dom'
import avatar from "../images/avatar.png"

//css styles
const useStyles = makeStyles(theme=>({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  title: {
    color: "#E79E2A"
  },
  subtitle: {
    color: "#D6C8A8",
    marginBottom: "3rem"
  },
  typedContainer: {
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    overflowX: "hidden",
    margin: "20rem 0 0 50%"
  },
  about: {
    background: "#534A43",
    padding: "2rem",
    minHeight: "25rem"
  },
  heading: {
    color: "#E79E2A",
    padding: "1rem"
  },
  subheading: {
    color: "#D6C8A8",
    borderLeft: "1px solid #E79E2A",
    fontSize: "1.65rem",
    padding: "1rem",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.2rem"
    },
    skill: {
      color: "#E79E2A",
    }
  }
}))

const items = [
  {
    name: "HTML",
    img: 'html.png'
  },
  {
    name: "CSS",
    img: 'css.png'
  },
  {
    name: "Bootstrap",
    img: 'bootstrap.png'
  },
  {
    name: "Sass",
    img: 'sass.png'
  },
  {
    name: "React.Js",
    img: 'react.png'
  },
  {
    name: "Node.Js",
    img: 'node.png'
  },
  {
    name: "Express.Js",
    img: 'express.png'
  },
  {
    name: "Flask",
    img: 'flask.png'
  },
  {
    name: "Php",
    img: 'php.png'
  },
  {
    name: "MongoDB",
    img: 'mongo.png'
  },
  {
    name: "SQL",
    img: 'sql.png'
  },
  {
    name: "Python",
    img: 'python.png'
  },
  {
    name: "C++",
    img: 'cpp.png'
  },
  {
    name: "Event Management",
    img: 'event.png'
  },
  {
    name: "Marketing and Sales",
    img: 'sales.png'
  },
  {
    name: "SEO",
    img: 'seo.png'
  }
];

const menuItems = [
  {
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listText: "Contact",
    listPath: "/contact"
  }
]

const Header = () => {
  const classes = useStyles();
  return(
    <>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="Siddharth Deb" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Siddharth Deb"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
          strings={["Web Developer", "Web Designer", "Coder"]}
          typeSpeed={40}
          backSpeed={60}
          loop/>
        </Typography>
      </Box>
      <Box variant='div' className={classes.about}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.heading}>
            <Typography variant='h3'>
              About me
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}  className={classes.subheading}>
            <Typography variant='subheading1'>
              I am a computer science student with experience in working as a front-end and back-end web developer with various projects.

              I also have extensive marketing, sales and event management experience, particularly within a
              higher education setting.
              <br />
              I aim to advance my web development skills further and get into freelancing.
            </Typography>

          </Grid>
        </Grid>
      </Box>
      <Box variant='div'>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography
            variant="h2"
            className={classes.heading}
            style={{textAlign: "center"}}
            >
              My Skills
            </Typography>
          </Grid>
          {items.map((isItem, key)=>(
          <Grid item xs={4} md={2}
          style={{
            margin: "1rem 0",
            textAlign: "center",
            padding: "1rem",
          }}>
            <img
            key={key}
            src={require('../images/'+isItem.img)}
            alt={isItem.name}
            style={{height: "5rem"}}/>
            <Typography
            variant='h6'
            style={{
              color: "#E79E2A",
              fontSize: "0.9rem"
            }}
            >
            {isItem.name}
            </Typography>
          </Grid>
          ))}
        </Grid>
      </Box>
      <Box variant='div'>
        <Grid
        container
        justify="center"
        style={{
          textAlign: "center",
          background: "#534A43"
        }}>
          <Grid item xs={12}>
            <Typography
            variant="h2"
            className={classes.heading}
            style={{textAlign: "center"}}
            >
              Let's go
            </Typography>
          </Grid>
          {menuItems.map((isItem, key)=>(
          <Grid item xs={12} md={4}
          style={{
            textAlign: "center"
          }}>
            <Button
            key={key}
            component={Link}
            to={isItem.listPath}
            variant="outlined"
            style={{
              color: "#E79E2A",
              borderColor: "#E79E2A",
              margin: "2rem auto"
            }}>
            {isItem.listText}
            </Button>
          </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Header
