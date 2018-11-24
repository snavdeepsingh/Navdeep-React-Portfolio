import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import EmailIcons from '../icons/Email';
import LinkedInIcons from '../icons/LinkedIn';
import GitHubIcons from '../icons/GitHub';
import ResumeIcons from '../icons/Resume';
// import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    borderTop: "1px solid #E7E7E7",
    backgroundColor: "#f5f5f5",
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
        <a href="https://www.linkedin.com/in/snavdeepsingh/" rel="noopener noreferrer" target="_blank" ><LinkedInIcons fontSize={30}/></a>
        <a href="https://github.com/snavdeepsingh" rel="noopener noreferrer" target="_blank" ><GitHubIcons fontSize={30}/></a>
        <a href="mailto:snavdeepsingh@gmail.com" rel="noopener noreferrer" target="_blank" ><EmailIcons fontSize={30}/></a>
        <a href="https://docs.google.com/document/d/1ykYhoN8hey4I6AZBpKoa39gecO1NVpIza9eTXPF6vCs/edit?usp=sharing" rel="noopener noreferrer" target="_blank" ><ResumeIcons fontSize={30}/></a>
       {/* <Typography variant="subheading" gutterBottom>
        © 2018 Navdeep Singh
        </Typography> */}
        
        
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);