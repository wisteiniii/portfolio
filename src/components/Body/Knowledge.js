import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Html5Svg from "./../../assets/images/Html5Svg.svg";
import Css3Svg from "./../../assets/images/Css3Svg.svg";
import JsSvg from "./../../assets/images/JsSvg.svg";
import NpmSvg from "./../../assets/images/NpmSvg.svg";
import ReactSvg from "./../../assets/images/ReactSvg.svg";
import SkillBar from "react-skillbars";
import "./Knowledge.module.css";
import Bounce from "react-reveal/Bounce";

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

  const html5 = [
    {type: "HTML5", level: 85},
  ];
  const css3 = [
    {type: "CSS3", level: 80},
  ];
  const js = [
    {type: "JavaScript", level: 60},
  ];
  const node = [
    {type: "NodeJS", level: 70},
  ];
  const react = [
    {type: "React", level: 40},
  ];

  const colors = {
    "bar": "#3f51b5",
    "title": {
      "text": "#fff",
      "background": "#3f71b5"
    }
  }


  return (
    <div className={classes.root}>
      <Grid container 
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      >
        <Grid item xs={12} sm={6}
        style={{
          width: "400px",
          height: "400px"
        }}
        >
        <Bounce left>
          <Paper elevation={24} className={classes.paper}>
          <img src={Html5Svg} alt="Logo" />
          <SkillBar skills={html5} height={15} colors={colors}/>
          </Paper>
          </Bounce>
        </Grid>
        <Grid item xs={12} sm={6}
        style={{
          width: "400px",
          height: "400px"
        }}
        ><Bounce right>
          <Paper elevation={24} className={classes.paper}>
          <img src={Css3Svg} alt="Logo" />
          <SkillBar skills={css3} height={15} colors={colors}/>
          </Paper></Bounce>
        </Grid>
        <Grid item xs={12} sm={6}
        style={{
          width: "400px",
          height: "400px"
        }}
        ><Bounce left>
          <Paper elevation={24} className={classes.paper}>
          <img src={JsSvg} alt="Logo" />
          <SkillBar skills={js} height={15} colors={colors}/>
          </Paper></Bounce>
        </Grid>
        <Grid item xs={12} sm={6}
        style={{
          width: "400px",
          height: "400px"
        }}
        ><Bounce right>
          <Paper elevation={24} className={classes.paper}>
          <img src={NpmSvg} alt="Logo" />
          <SkillBar skills={node} height={15} colors={colors}/>
          </Paper></Bounce>
        </Grid>
        <Grid item xs={12} sm={6}
        style={{
          width: "400px",
          height: "400px"
        }}
        ><Bounce left>
          <Paper elevation={24} className={classes.paper}>
          <img src={ReactSvg} alt="Logo" />
          <SkillBar skills={react} height={15} colors={colors}/>
          </Paper></Bounce>
        </Grid>
      </Grid>
    </div>
  );
}
