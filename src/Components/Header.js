import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { useNavigate } from "react-router";

const drawerWidth = 240; 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
    }, 
  }, 
  user: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
}));

const Header = ({ lecturerId }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePageChange = (page) => {
    navigate("/" + page);
  };

  return (
    <ThemeProvider theme={theme}>
          {isMobile ? (
            <> 
         <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
              <Typography variant="h6" className={classes.title}>
                SEDCS
              </Typography>
              <IconButton
                color="inherit"
                onClick={() => handlePageChange("Home")}
              >
                <AccountCircle />
              </IconButton> 
              </Toolbar>
      </AppBar>
            </>
          ) : (
            <> 
                     <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
              <Typography variant="h6" className={classes.title}>
                STUDENT EXAMINATION DATA CARD SYSTEM
              </Typography>
              <div className={classes.user}>
                <Typography variant="subtitle1">Staff ID: {lecturerId}</Typography>
                <IconButton
                  color="inherit"
                  onClick={() => handlePageChange("Home")}
                >
                  <AccountCircle />
                </IconButton>
              </div>  
              </Toolbar>
      </AppBar>
            </>
          )}

    </ThemeProvider>
  );
};

export default Header;
