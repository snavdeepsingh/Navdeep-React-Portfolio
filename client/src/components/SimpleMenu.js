import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import HomeIcons from '../icons/HomeIcons';
import ProjectIcons from '../icons/ProjectIcons';
import ContactIcons from '../icons/ContactIcons';

const styles = {
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    }
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
          <MenuItem onClick={this.handleClose}><Link to="/"><HomeIcons /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/projects"><ProjectIcons /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/contact"><ContactIcons /></Link></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;