import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EmojiPeopleOutlinedIcon from "@material-ui/icons/EmojiPeopleOutlined";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ContactsIcon from "@material-ui/icons/Contacts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  indicator: {
    backgroundColor: "cyan",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab
            icon={<EmojiPeopleOutlinedIcon />}
            label="William Steinmetz"
            href="/"
            {...a11yProps(0)}
          />
          <LinkTab
            icon={<AssignmentIcon />}
            label="Resume"
            href="/"
            {...a11yProps(1)}
          />
          <LinkTab
            icon={<ContactsIcon />}
            label="Contact Me"
            href="/"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
