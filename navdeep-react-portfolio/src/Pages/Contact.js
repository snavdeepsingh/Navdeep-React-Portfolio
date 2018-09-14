import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcons from "../icons/LinkedIn";
import GitHubIcons from "../icons/GitHub";
import EmailIcons from "../icons/Email";
import Grid from "@material-ui/core/Grid";

import ImageAvatar from '../components/ImageAvatar';

const styles = {
    root: {
        margin: 'auto',
      width: '100%',
      marginTop: "100px",
      marginBottom: "100px",
      backgroudColor: "#4f5352",
      fontSize: "60px"
    },
    subheading: {
        margin: 'auto',
        width: '60%'
    }
  };

const Contact = (props) => {
    const { classes } = props;
  return (
    <div className={classes.root} > 
      <ImageAvatar />
      <Typography variant="display2" gutterBottom>
       Contact
      </Typography>
      <hr  width="60%"/>
      <div>
        <Grid container spacing={8}>
          <Grid  item xs={4}>
            <a href="https://www.linkedin.com/in/snavdeepsingh/" rel="noopener noreferrer" target="_blank" ><LinkedInIcons fontSize={60}/></a>
            <Typography variant="subheading" gutterBottom>
              Linkedin
            </Typography>
          </Grid >
          <Grid  item xs={4}>
            <a href="https://github.com/snavdeepsingh" rel="noopener noreferrer" target="_blank" ><GitHubIcons fontSize={60}/></a>
            <Typography variant="subheading" gutterBottom>
              GitHub
            </Typography>
          </Grid >
          <Grid  item xs={4}>
            <a href="mailto:snavdeepsingh@gmail.com" rel="noopener noreferrer" target="_blank" ><EmailIcons fontSize={60}/></a>
            <Typography variant="subheading" gutterBottom>
              Email
            </Typography>
          </Grid >
        </Grid>
      </div>
      
    </div>
  )
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Contact);
