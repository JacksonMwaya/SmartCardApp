import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles, 
  Typography, 

} from "@material-ui/core";
import Divider from '@mui/material/Divider';
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp"; 
import { useNavigate } from "react-router-dom"; 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },   
  toolbar: {
    textAlign: "center", // center the typography
    padding: theme.spacing(2), // add some padding
  }, 
  selected: {
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    }, 
  },
}));

const SideNav = () => { 
  const navigate = useNavigate();
  const classes = useStyles();
  const [selectedPage, setSelectedPage] = useState("Home");

  const handlePageChange = (page) => {
    setSelectedPage(page);  
    navigate("/" + page);

  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} >  
        <Typography variant="h4" fontWeight="bold" fontFamily="Roboto">SEDCS</Typography>
        </div> 
        <Divider />
        <List>
          <ListItem
            button
            selected={selectedPage === "Home"}
            onClick={() => handlePageChange("Home")}  
            style={{ background: "none" }}
            classes={{
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            selected={selectedPage === "Registration"}
            onClick={() => handlePageChange("StudentAdd")} 
            classes={{
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Registration" />
          </ListItem>
          <ListItem
            button
            selected={selectedPage === "View ID"}
            onClick={() => handlePageChange("ViewId")} 
            classes={{
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="View ID" />
          </ListItem>
          <ListItem
            button
            selected={selectedPage === "Reports"}
            onClick={() => handlePageChange("ViewReport")} 
            classes={{
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem
            button
            selected={selectedPage === "Logout"}
            onClick={() => handlePageChange("Login")}  
            classes={{
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer> 
    </div>
  );
};

export default SideNav;


