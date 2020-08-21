import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Html5svg from "./Icons/Html5svg.js";
import Css3svg from "./Icons/Css3svg.js";
import Jssvg from "./Icons/Jssvg.js";
import Npmsvg from "./Icons/Npmsvg.js";
import Reactsvg from "./Icons/Reactsvg.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Knowledge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={24} className={classes.paper}>
            <Css3svg />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={24} className={classes.paper}>
            <Html5svg />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={24} className={classes.paper}>
            <Jssvg />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={24} className={classes.paper}>
            <Npmsvg />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={24} className={classes.paper}>
            <Reactsvg />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
