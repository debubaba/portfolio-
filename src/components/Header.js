import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Particles from 'react-particles-js';
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
    width: theme.spacing(20),
    height: theme.spacing(25),
    margin: "0 auto"
  },
  title: {
    color: "#E79E2A",
    zIndex: 1,
    textShadow: "0 2px 1px #747474, -1px 3px 1px #767676, -2px 5px 1px #787878, -3px 7px 1px #7a7a7a, -4px 9px 1px #7f7f7f, -5px 11px 1px #838383"
  },
  subtitle: {
    color: "#D6C8A8",
    marginBottom: "3rem",
    zIndex: 1,
    textShadow: "0 2px 1px #747474, -1px 3px 1px #767676, -2px 5px 1px #787878, -3px 7px 1px #7a7a7a, -4px 9px 1px #7f7f7f, -5px 11px 1px #838383"

    },
  typedContainer: {
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    overflowX: "hidden",
    margin: "0 0 -40rem 50%",
    padding: "50rem 0 10rem 0",
  },
  about: {
    background: "#534A43",
    padding: "1rem",
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
    name: "Javascript",
    img: 'javascript.svg'
  },
  {
    name: "React.Js",
    img: 'react.png'
  },
  {
    name: "Redux",
    img: 'redux.png'
  },
  {
    name: "Firebase",
    img: 'firebase.png'
  },
  {
    name: "Photoshop",
    img: 'photoshop.png'
  },
  {
    name: "Material-UI",
    img: 'materialui.png'
  },
  {
    name: "Materialize",
    img: 'materialize.png'
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
  }
]


const Header = () => {
  const classes = useStyles();
  return(
    <>
      <Box className={classes.typedContainer} >
      <Particles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
      }}
            params={{
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "line_linked": {
                "enable": true,
                "opacity": 0
            },
            "move": {
                "direction": "random",
                "speed": 0.8
            },
            "size": {
                "value": 10
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.05
                }
            }
        },

        "retina_detect": true
      }}
      	     />

        <Typography className={classes.title} variant="h3">
          Siddharth Deb
        </Typography>
        <img src={avatar} alt="Siddharth Deb" className={classes.avatar}/>
        <Typography className={classes.subtitle} variant="h4">
          <Typed
          strings={["Web Developer", "Designer", "Coder"]}
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
              I am a second year computer science student with experience in working as a web developer and designer in various projects.
              I also have extensive marketing, sales and event management experience, particularly within a
              higher education setting.
              <br /><br />
              I love designing and developing websites and aim to make a living out of it. I am a beginner in Photoshop and also make digital art in my spare time.
              The artwork used as background, the fonticons and the avatar have all been created by me. I am very passionate about building things that are not only functionally precise but also aesthetically pleasing.
              <br /><br />
              If you like my work or you wish to offer any oppurtunities, you could get in touch with me by visiting my
              'Contact Me' page (<Link to='/contact' style={{
                textDecoration: "none",
                color: "#D6C8A8"
              }}>Click here!</Link>).
            </Typography>

          </Grid>
        </Grid>
      </Box>
      <Box variant='div' style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        margin: "1rem",
        maxWidth: "98%"
      }}>
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
            textAlign: "center",
            padding: "1rem 1rem 1rem 1rem",
          }}>
            <img
            key={key}
            src={require('../images/'+isItem.img)}
            alt={isItem.name}
            style={{height: "5rem"}}/>
            <Typography
            variant='h6'
            style={{
              color: "#145777",
              fontSize: "0.9rem",
              fontWeight: 900
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
              Check out my work!
            </Typography>
          </Grid>
          {menuItems.map((isItem, key)=>(
          <Grid item xs={6}
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
