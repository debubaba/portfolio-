import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {
  Typography,
  Avatar,
  Grid,
  Box
} from '@material-ui/core'
import Typed from "react-typed"
import avatar from "../images/avatar.png"

//css styles
const useStyles = makeStyles(theme=>({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "#E79E2A"
  },
  subtitle: {
    color: "#D6C8A8",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  return(
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Siddharth Deb" />
      </Grid>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Siddharth Deb"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h4">
        <Typed
        strings={["Web Developer", "Web Designer", "Coder"]}
        typeSpeed={40}
        backSpeed={60}
        loop/>
      </Typography>
    </Box>
  )
}

export default Header
