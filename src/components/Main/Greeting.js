import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

function Greeting() {
  let name = prompt("Welcome, what's your name?");
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
        width: "50%",
        height: theme.spacing(10),
      },
      justifyContent: "center",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    greeting: {
      fontSize: "3.1vw",
      fontWeight: "500",
    },
  }));

  const classes = useStyles();

  if (hours < 12) {
    timeOfDay = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good Afternoon";
  } else {
    timeOfDay = "Good Evening";
  }

  return (
    <Grid
      className={classes.root}
      item
      xs={16}
      sm={24}
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={24} className={classes.content}>
        <p className={classes.greeting}>{`${timeOfDay}, ${name}`}!</p>
      </Paper>
    </Grid>
  );
}

export default Greeting;
