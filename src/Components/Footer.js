import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "60px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="fixed" className={classes.footer}>
      <Toolbar>
        {!isMobile ? (
          <Typography variant="body1">
            © 2023 STUDENT EXAMINATION DATA CARD SYSTEM
          </Typography>
        ) : (
          <> 
            <Typography variant="body1">
              © 2023 SEDCS
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
