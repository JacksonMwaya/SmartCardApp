import React, { useState, useEffect } from "react";
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
  Person as PersonIcon,
  ListAlt as ListAltIcon,
  Assignment as AssignmentIcon,
  ExitToApp as ExitToAppIcon, 
  Update,
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

const SideNav = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [isAuthenticated, setIsAuthenticated] = useState("Yes");
  const [selectedPage, setSelectedPage] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePageChange = (page) => {
    if (page === "Login") {
      handleLogout();
    } else {
      setIsAuthenticated("Yes");
      setSelectedPage(page);
      navigate("/" + page);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated("No");
    setSelectedPage("Login");
    navigate("/Login");
  };

  useEffect(() => {
    const handlePopstate = () => {
      if (isAuthenticated === "No") {
        window.history.pushState(null, "", "/Login");
        navigate("/Login");
      }
    };
    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, [isAuthenticated, navigate]);

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
            selected={selectedPage === "Update"}
            onClick={() => handlePageChange("UpdatePage")}
            classes={{
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <Update />
            </ListItemIcon>
            <ListItemText primary="Update" />
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

export default SideNav;