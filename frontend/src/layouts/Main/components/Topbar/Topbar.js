import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  logo:{
     textDecoration:'none',
     color:'white'
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const { history } = props;
  const classes = useStyles();

  const [notifications] = useState([]);

  const signOut = () => {
    localStorage.removeItem('token');
    window.location = "/";
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Typography>
          <RouterLink to="/" className={classes.logo}>
            <h1>Managing Polls</h1>
          </RouterLink>
        </Typography>
      
        <div className={classes.flexGrow} />
        <Hidden mdDown>
        
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            title="SIGNOUT"
            onClick={signOut}
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
