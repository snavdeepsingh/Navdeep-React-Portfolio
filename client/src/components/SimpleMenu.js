import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import MouseOverPopoverHome from "../hoverText/HomeText";
import MouseOverPopoverProject from "../hoverText/ProjectText";
import MouseOverPopoverContact from "../hoverText/ContactText";



const styles = {
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    primary: {}
  };

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <IconButton
          className={styles.menuButton} color="inherit" aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><Link to="/"><MouseOverPopoverHome /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/projects"><MouseOverPopoverProject /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/contact"><MouseOverPopoverContact /></Link></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;