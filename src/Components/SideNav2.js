import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, 
  Divider,
  Typography,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import {
  Home as HomeIcon,
  ListAlt as ListAltIcon,
  Assignment as AssignmentIcon,
  ExitToApp as ExitToAppIcon, 
  Menu as MenuIcon,
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("xs")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    textAlign: "center",
    padding: theme.spacing(2),
  },
  selected: {
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },  
    paddingLeft: theme.spacing(2),  
    position: "fixed", 
    zIndex: 9999 // set a high z-index value to make it appear on top 

  },
}));

const SideNav2 = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [selectedPage, setSelectedPage] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePageChange = (page) => {
    if (page === "Login") {
      handleLogout();
    } else {
      setSelectedPage(page);
      navigate("/Teachers/" + page);
    }
  };
/*
  const handleLogout = () => {
    setSelectedPage("Login");
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login"); 
    navigate("/Login");
  };  
  */
  const handleLogout = async () => {
    try {
      // Send a request to the backend to destroy the session
      const response = await fetch('http://192.168.43.109:8080/smartcardapp-api/logout.php', { //add proper path then logout.php
        method: 'POST',
        Accept: "application/json",
        "Content-Type": "application/json", 
        credentials: "include",
      }); 
      const data = await response.json();

      if (data.status ===200) {
        // User is not logged in, redirect to the login page 
        navigate("/Login");
      //window.location.href = "/Home";
      }
    } catch (error) {
      console.error(error);
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerContent = (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h4" fontWeight="bold" fontFamily="Roboto">
          SEDCS
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          selected={selectedPage === "Home2"}
          onClick={() => handlePageChange("Home2")}
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
            selected={selectedPage === "ViewId2"}
            onClick={() => handlePageChange("ViewId2")}
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
            selected={selectedPage === "ViewReport2"}
            onClick={() => handlePageChange("ViewReport2")}
            classes={{
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
</List>
      <Divider />
      <List>
        <ListItem
          button
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
    </div>
  );

  return (
    <div className={classes.root}>
      <IconButton
        color="white"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="side navigation">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant={isMobile ? "temporary" : "persistent"}
          anchor="left"
          open={isMobile ? isDrawerOpen : true}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerContent}
        </Drawer>
      </nav>
    </div>
  );
};

export default SideNav2;

