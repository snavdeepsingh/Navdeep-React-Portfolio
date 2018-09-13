import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import EmailIcon from '../icons/Email';
import LinkedInIcon from '../icons/LinkedIn';
import GitHubIcon from '../icons/GitHub';
import ResumeIcon from '../icons/Resume';
import SpeedDials from './SpeedDial.js';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    borderTop: "1px solid #E7E7E7",
    backgroundColor: "#777777",
  },
  icons: {
      color: 'white',
  }
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <a href="https://www.linkedin.com/in/snavdeepsingh/" rel="noopener noreferrer" target="_blank" ><LinkedInIcon /></a>
        <a href="https://github.com/snavdeepsingh" rel="noopener noreferrer" target="_blank" ><GitHubIcon /></a>
        <a href="mailto:snavdeepsingh@gmail.com" rel="noopener noreferrer" target="_blank" ><EmailIcon /></a>
        <a href="https://docs.google.com/document/d/1ykYhoN8hey4I6AZBpKoa39gecO1NVpIza9eTXPF6vCs/edit?usp=sharing" rel="noopener noreferrer" target="_blank" ><ResumeIcon /></a>
        <SpeedDials />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);