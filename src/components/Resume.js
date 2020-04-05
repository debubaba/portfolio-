import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
  Typography,
  Box,
  Grid,
  Button
} from '@material-ui/core'
import Navbar from './Navbar.js'
import Particles from 'react-particles-js'

const useStyles = makeStyles(theme=>({
  mainContainer: {
    background: "",
    marginTop: "3.5rem"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #D6C8A8",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      },

    }
  },
  timeLineItem:{
    padding: "1rem",
    background: "#534A43",
    borderBottom: "2px solid #E79E2A",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "$:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% -5px)",
      borderStyle: "solid",
      borderColor: "#1A474C #1A474C transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#E79E2A"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #1A474C #1A474C"
      }
    }
    },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "14rem",
    margin: "0.3rem 0 auto",
    fontSize: "1.2rem",
    background: "#1A474C",
    color: "#E79E2A",
    lineHeight: 1,
    padding: "0.5rem 0.5rem 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#E79E2A",
    padding: "3rem 0",
    textTransform: "uppercase",
    background: "#534A43",
      borderBottom: "2px solid #E79E2A",
  },
  subheading: {
    color: "#E79E2A",
    padding: "0",
    textTransform: "uppercase"
  },
  about: {
    background: "#534A43",
    padding: "2rem",
    minHeight: "25rem"
  },
  head: {
    color: "#E79E2A",
    padding: "1rem"
  },
  subhead: {
    color: "#D6C8A8",
    borderLeft: "1px solid #E79E2A",
    fontSize: "1.2rem",
    padding: "1rem",

  }
}));

const Resume = () => {
  const classes = useStyles();
  return(
    <>

      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
          variant="h6"
          className={[classes.timeLineYear, classes.timeLineItem].join(' ')}>
            January, 2019 - Present
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subheading}>
              Core commitee member
            </Typography>
            <Typography variant="body1" align="center" style={{color: "white"}}>
            IEEE Computer Society Student Chapter. Vellore,
Tamil Nadu
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "#D6C8A8"}}>
            Working as a front-end web developer at IEEE Computer Society Student Chapter VIT Vellore.
Also working as a manager for ARCS'2020, a 3-day technical symposium being organised by
the aforementioned. Have previously worked as coordinator for ARCS'2019 as well.
            </Typography>
           </Box>

           <Typography
           variant="h6"
           className={[classes.timeLineYear, classes.timeLineItem].join(' ')}>
             May, 2019 - July, 2019
           </Typography>
           <Box component="div" className={classes.timeLineItem}>
             <Typography variant="h5" align="center" className={classes.subheading}>
               Data analysis intern
             </Typography>
             <Typography variant="body1" align="center" style={{color: "white"}}>
               Tata Technology, Mumbai
             </Typography>
             <Typography variant="subtitle1" align="center" style={{color: "#D6C8A8"}}>
             Using python, wrote a program to comb through employee data provided by company to find
 trends in data transfer and plot graphs accordingly.
             </Typography>
            </Box>

            <Typography
            variant="h6"
            className={[classes.timeLineYear, classes.timeLineItem].join(' ')}>
              December, 2019 - Present
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" align="center" className={classes.subheading}>
                Development team member
              </Typography>
              <Typography variant="body1" align="center" style={{color: "white"}}>
                C4 Projects. Vellore, Tamil Nadu
              </Typography>
              <Typography variant="subtitle1" align="center" style={{color: "#D6C8A8"}}>
                Working as a front-end web developer in this online education portal start up
              </Typography>
             </Box>

             <Box component="div" className={classes.timeLineItem}>
               <Typography variant="h5" align="center" className={classes.subheading}>
               Web design team member
               </Typography>
               <Typography variant="body1" align="center" style={{color: "white"}}>
                 TEEE Clan. Vellore, Tamil Nadu
               </Typography>
               <Typography variant="subtitle1" align="center" style={{color: "#D6C8A8"}}>
                 Working as a front-end developer for this clothing based e-commerce start up.
               </Typography>
              </Box>
          </Box>
      </Box>
      <Box variant='div' className={classes.about}>
      <Grid container>
        <Grid item xs={12} lg={6}>
            <Grid container>
              <Grid item xs={12} className={classes.head}>
                <Typography variant='h4'>
                  Achievements
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.subhead}>
                <Typography variant='subheading1'>
                  <ul>
                    <li>
                    Represented IEEE Computer Society VIT Vellore at All India Computer Society Student
                    & Young Professional Congress (AICSSYC),the annual flagship event for IEEE
                    Computer Society Members In India
                    </li>
                    <li>
                    Worked as Coordinator at ARCS'19, the annual flagship technical symposium organized
                    by IEEE Computer Society Student Chapter VIT Vellore
                    </li>
                    <li>
                    Worked as Manager at ARCS'20, the annual flagship technical symposium organized by
                    IEEE Computer Society Student Chapter VIT Vellore
                    </li>
                    <li>
                    Participated in Hack-a-thon on Development of API for Smart Resource Usages in Smart
                    Devices held at Vellore institute of technology
                    </li>
                    <li>
                    Participated in Devjams'19 Hackathon organised by DSC VIT
                    </li>
                    <li>
                    Participated in Code2Create'20 organised by ACM VIT
                    </li>
                  </ul>
                </Typography>

              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
            <Grid container>
              <Grid item xs={12} className={classes.head}>
                <Typography variant='h4'>
                  Co-Curricular Activities
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.subhead}>
                <Typography variant='subheading1'>
                  <ul>
                    <li>
                    Worked as volunteer in Dream World Film Festival organized by VIT Film Society
                    </li>
                    <li>
                    Directed a short film Gudiya
                      (<Button
                      href="https://youtu.be/q4uy0j-_Ze0"
                      style={{
                        color: "#D6C8A8",

                      }}>
                       Check it out!
                      </Button>)
                    </li>
                    <li>
                    Took part in VIT Technical United Conference
                    </li>
                    <li>
                    Gold medalist in swimming at school level
                    </li>
                    <li>
                    Performed at AIKYA 2020, a cultural dance performance held during Riviera 2020
                    college festival of VIT Vellore
                    </li>
                    <li>
                    Have organised and taught at Night Technical In-core sessions for new core Committee
                    members of IEEE Computer Society Student Chapter VIT Vellore
                    </li>
                  </ul>
                </Typography>

              </Grid>
            </Grid>
        </Grid>
      </Grid>

      </Box>
    </>
  )
}

export default Resume
