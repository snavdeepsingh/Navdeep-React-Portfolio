import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import SimpleMenu from './SimpleMenu.js';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: '0px',
    width: "100%",
    zIndex: 4,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

function Navbar (props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
            <SimpleMenu /> <hr />
          <h1 style={{color:"#777777"}}>Navdeep Singh</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
