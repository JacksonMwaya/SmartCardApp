import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

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
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.footer}>
      <Toolbar>
        <Typography variant="body1">© 2023 STUDENT EXAMINATION DATA CARD SYSTEM</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
