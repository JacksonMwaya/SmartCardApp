import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Student Examination Data Card System
        </Typography>
        <Avatar className={classes.avatar}>{props.fname.charAt(0)}</Avatar>
        <Typography variant="subtitle1">{props.fname}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

