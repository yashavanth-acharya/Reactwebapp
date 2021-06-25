import React from 'react';
import "./home.css"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import krlogo from '../../static/images/Kar-Logo.png';
import Gallary from '../gallary/gallary'
import Cards from './cards'
const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      height:"20rem",
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    //   padding:"40px"

    },
    cover: {
      width: "100%",
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    container:{
       marginTop:"2rem"
    },

  }));
const Home=()=>{
    const classes = useStyles();

    return(
        <React.Fragment >
           
             <Grid  >
             
        <Grid item xs={12} className="background-banner " >
       <div className="main-Heading ">
           <div className="heading-logo">
           <img src={krlogo} alt="logo" width="60" height="60"  />
           </div>
           <div className="collage-name">
           <h1>GOVERNMENT POLYTECHNIC, KAUP BELAPU</h1>
           </div>
           {/* <div className="banner-text" color="white">
          </div> */}
       </div>
        </Grid>
       
        </Grid>
       
        <Container  maxWidth="xl" className={classes.container}>
            {/* <Cards/> */}
     
    <Gallary/>
        </Container>
       
        </React.Fragment>
    )
}

export default Home