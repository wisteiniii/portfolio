import React from "react";
import styles from "./Greeting.module.css";
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';
import classes from "./Greeting.module.css";
import { red } from "@material-ui/core/colors";




function Greeting() {
  let name = prompt("Welcome, what's your name?");
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),
        width: "50%",
        height: theme.spacing(10),
      },
      justifyContent: 'center',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    }
  }));

  const classes = useStyles();


  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = " afternoon";
  } else {
    timeOfDay = "night";
  }



  return (
    <div className={classes.root}>
    <Paper elevation={24} className={classes.content}>
      <h1> Good {`${timeOfDay}, ${name}`}!< /h1>
      </Paper>
    </div> 
  )
}


export default Greeting;