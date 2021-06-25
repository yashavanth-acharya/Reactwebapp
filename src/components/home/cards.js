// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Students from '../../static/images/photos/12.jpg'
// import CountUp from 'react-countup';
// const useStyles = makeStyles((theme) => ({
//   root: {
    
//   },

//   cardcontent: {
//    display: "flex",
//    justifyContent: "center",
//    alignItems: "center",
//    textAlign: "center"
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

// export default function ImgMediaCard() {
//   const classes = useStyles();


//   return (
//     <div>

// <Grid container className={classes.root} spacing={1}>
//     <Grid container justify="center" spacing={3}>

//     <Grid item xs={6} style={{padding:20}}>
//     <Typography variant="p" component="p" style={{marginTop:"50px"}}>
//     <CountUp end={100} />
//         {/* Government Polytechnic, Kaup Belapu is an AICTE approved institution run by Government of Karnataka and coming under the purview of Directorate of Technical Education. The institute is rendering yeomen service to the citizens of Udupi and surrounding areas by offering three year diploma program in various engineering courses.The training is rendered by well qualified dedicated staff with supportive infrastructure. */}
//     </Typography>
//         </Grid>

//     <Grid item xs={4}>
//           <img src={Students} width="100%" height="60%"/>
          
//         </Grid>
        
//     </Grid>
//     </Grid>
    
//     </div>
//   );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
	flexWrap: "nowrap",
    padding:"30px",
    marginTop:"20px"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    color:"#000",
    height:"10rem"
  },
 
  iconsize:{
      fontSize:"50px"
  },
  caradtitle:{
fontSize:"25px",
fontFamily:"bold",

fontWeight:"bold"
  }
}));

export default function SpacingGrid() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
     <Grid container  justify="center" item xs={12}  spacing={3}>
     <Grid item xs={3}>
          <Paper className={classes.paper}>
        <PersonIcon className={classes.iconsize}/>
        <div>
        <CountUp end={300} />
        </div>
        <div className={classes.caradtitle}>
            Students
        </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
        <GroupIcon  className={classes.iconsize} />
        <div>
        <CountUp end={20} />
        </div>
        <div className={classes.caradtitle}>
        Staffs
        </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
        <LibraryBooksIcon className={classes.iconsize}/>
        <div>
        <CountUp end={5} />
        </div>
        <div className={classes.caradtitle}>
        Courses
        </div>
          </Paper>
        </Grid>
        </Grid>
    </Grid>
  );
}
