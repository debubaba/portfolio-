import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {
  ExpandMore,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from '@material-ui/icons';
import avatar from '../images/avatar.png';
import SocialTray from './socialTray.js'

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: "100%",
    background: "#145777",
    height: "fit-content"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(10),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#D6C8A8",
  },
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "3rem",
    zIndex: 1202
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact"
  }
]

const Navbar = () => {
  const[state, setState] = useState({
    right: false
  });

  const toggleSlider = ((slider, open) => () =>{
    setState({...state, [slider]: open});
  });

  const classes = useStyles();

  const sideList = slider => (
    <Box
    component="div"
    className={classes.menuSliderContainer}
    onClick={toggleSlider(slider, false)}
    >
      <img src={avatar} alt="Siddharth Deb" className={classes.avatar}/>
      <Divider />
      <List>
      {menuItems.map((isItem, key)=>(
        <ListItem
        button
        key={key}
        component={Link}
        to={isItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {isItem.listIcon}
            </ListItemIcon>
            <ListItemText
            primary={isItem.listText}
            className={classes.listItem}
            />
        </ListItem>
      ))}
      </List>
      <Divider />
      <SocialTray  />
    </Box>

  );
  return(
    <>
      <Box component="nav" className={classes.root}>
        <AppBar position="static" style={{background: "#1A474C"}}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ExpandMore style={{color: "#E79E2A"}} />
            </IconButton>
            <Typography variant="h5" style={{color: "#D6C8A8"}}>
              Siddharth Deb
            </Typography>
            <MobilRightMenuSlider
            anchor="top"
            open = {state.right}
            onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
