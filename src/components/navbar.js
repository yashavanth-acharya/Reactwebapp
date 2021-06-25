import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import krlogo from '../static/images/Kar-Logo.png';
import Link from '@material-ui/core/Link';
import '../static/css/navbar.css';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#000",
    
  },
 
  navitemsleft:{
  float:"left",
  },
  navitemsright:{
    float:"right",
   textAlign:"right",
  },
  header:{
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
marginLeft: theme.spacing(2),
marginRight: theme.spacing(2),
   
  },
  link:{
fontSize:"15px",
margin: theme.spacing(2),
textDecoration:"None",
color:"#000"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
 
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const [state, setstate] = React.useState(false);
  // setstate(prevState => !prevState)
  const [listopen, setlistOpen] = React.useState(false);
  const [listopen1, setlistOpen1] = React.useState(false);
  const [listopen2, setlistOpen2] = React.useState(false);
  const [listopen3, setlistOpen3] = React.useState(false);
  const [listopen4, setlistOpen4] = React.useState(false);
  const [listopen5, setlistOpen5] = React.useState(false);
  const [listopen6, setlistOpen6] = React.useState(false);
  // const [listopen7, setlistOpen7] = React.useState(false);
  // const [listopen, setlistOpen] = React.useState(false);


  const handleClick = (id) => {
    if(id===1){
      setlistOpen(!listopen);
    }
    if(id===2){
      setlistOpen1(!listopen1);
    }
    if(id===3){
      setlistOpen2(!listopen2);
    }
    if(id===4){
      setlistOpen3(!listopen3);
    }
    if(id===5){
      setlistOpen4(!listopen4);
    }
    if(id===6){
      setlistOpen5(!listopen5);
    }
    if(id===7){
      setlistOpen6(!listopen6);
    }
  };
  return (
    <div className={classes.root}>

      <AppBar position="static" id="navbar" > 
        <Toolbar>
          <span className="menuButton" >
          <IconButton 
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          </span>
          <span className="leftnavitem">
          <div className={classes.navitemsleft}>
          <Link href="/"  className={classes.link}>
            Home
          </Link>

          <Link  className={classes.link} id="dropdown">
          <p>About Us <span><ArrowDropDownIcon/></span></p> 
           <div className="dropdown-content">
          <a href="/">Our College</a>
          <a href="/">Vision-Mission</a>
        </div>
          </Link>

          <Link  className={classes.link} id="dropdown">
           
           <p>Academic <span><ArrowDropDownIcon/></span></p> 
           <div className="dropdown-content">
          <a href="/">Admissions</a>
          <a href="/">Exams</a>
        </div>
          </Link>

          
          <Link href="#"  className={classes.link}>
          Courses Offered 
          </Link>
       
          <Link   className={classes.link} id="dropdown">
          <p>Our Staff <span><ArrowDropDownIcon/></span></p> 
           <div className="dropdown-content">
          <a href="/">Teaching staff</a>
          <a href="/">Support staff</a>
          <a href="/">WorkShop staff</a>
        </div>
          </Link>
          </div>
          </span>
          <div className={classes.header} >
          <Typography variant="h5">
          <img src={krlogo} alt="logo" width="60" height="60"  />
          </Typography>
          <Typography variant="h6" className={classes.title} id="navbarheading">
          GOVERNMENT POLYTECHNIC, KAUP BELAPU
          </Typography>
          
          </div>
          <span className="rightnavitem">
          <div className={classes.navitemsright}>
          <Link href="#"  className={classes.link} id="dropdown">
          
          <p>Department <span><ArrowDropDownIcon/></span></p> 
           <div className="dropdown-content">
          <a href="/">Computer Science and engg</a>
          <a href="/">Electonics and Communication </a>
          <a href="/">Civil Engg</a>
          <a href="/">Mechanical Engg</a>
        </div>
          </Link>

          <Link  className={classes.link} id="dropdown">
            
            <p>Activities <span><ArrowDropDownIcon/></span></p> 
           <div className="dropdown-content">
          <a href="/">Placement Cell</a>
          <a href="/">Nss</a>
          <a href="/">Red corss unit</a>
          <a href="/">Alumni Association </a>
          <a href="/">Sports</a>
          <a href="/">Wid </a>

        </div>
          </Link>

          <Link   className={classes.link} id="dropdown">
            
            <p>Facilities <span><ArrowDropDownIcon/></span></p> 
           <div className="dropdown-content">
          <a href="/">Library</a>
          <a href="/">Laboratory And Workshop </a>
          <a href="/">Hostel</a>
          <a href="/">Conference Hall </a>
          <a href="/">Canteen</a>
          <a href="/">Parking </a>
        </div>
          </Link>

          <Link href="/"  className={classes.link} >
           Contact Us
          </Link>
          </div>
          </span>
        </Toolbar>
      </AppBar>
      <Hidden lgup implementation="css">
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         
            <ListItem button >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={()=>handleClick(1)}>
              <ListItemText primary="About Us" />
              {listopen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Our College" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Vision-Mission"/>
              </ListItem>
            </List>
          </Collapse>
            <ListItem button onClick={()=>handleClick(2)}>
              <ListItemText primary="Academic"  />
              {listopen1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listopen1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Admissions" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Exams"/>
              </ListItem>
            </List>
          </Collapse>
            <ListItem button >
              <ListItemText primary="Courses Offered" />
            </ListItem>
            <ListItem button onClick={()=>handleClick(3)}>
              <ListItemText primary="Our Staff"  />
              {listopen2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listopen2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Teaching staff" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Support staff"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="WorkShop staff"/>
              </ListItem>
            </List>
          </Collapse>
          <Divider />
            <ListItem button onClick={()=>handleClick(4)}>
              <ListItemText primary="Department"  />
              {listopen3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listopen3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Computer Science and engg" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Electonics and Communication "/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Civil Engg"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Mechanical Engg"/>
              </ListItem>
            </List>
          </Collapse>
            <ListItem button onClick={()=>handleClick(5)}>
              <ListItemText primary="Activities" />
              {listopen4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listopen4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Placement Cell" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Nss"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Red corss unit"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Alumni Association "/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Sports"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Wid"/>
              </ListItem>
            </List>
          </Collapse>
            <ListItem button onClick={()=>handleClick(6)} >
              <ListItemText primary="Facilities" />
              {listopen5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listopen5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Library" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Laboratory And Workshop "/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Hostel"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Conference Hall "/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Canteen"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Parking "/>
              </ListItem>
            </List>
          </Collapse>
            <ListItem button >
              <ListItemText primary="Contact Us" />
            </ListItem>
        </List>
       
       
      </Drawer>
      </Hidden>
    </div>
  );
}

// Navbar.propTypes = {
//   width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
// };