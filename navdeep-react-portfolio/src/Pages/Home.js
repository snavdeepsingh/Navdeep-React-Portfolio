import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ImageAvatar from '../components/ImageAvatar';

const styles = {
    root: {
        margin: 'auto',
      width: '100%',
      maxWidth: 500,
    },
    subheading: {
        margin: 'auto',
        width: '60%'
    }
  };

const Home = (props) => {
    const { classes } = props;
  return (
    <div > 
      <ImageAvatar />
      <Typography className={classes.root} variant="display2" gutterBottom>
       Who I am
      </Typography>
      <hr />
      <Typography className={classes.subheading} variant="subheading" gutterBottom>
        Hi, my name is Navdeep Singh and I love to write code that is efficient. I love innovating without reinventing the wheel! Coding is my passion and I enjoy both front end and back end. 
      </Typography>
      <br />
      <br />
      <Typography className={classes.subheading} variant="subheading" gutterBottom> 
        In my free time, I love to try new restaurants, travel and experience different cultures with my girlfriend. I consider myself tech savvy and enjoys exploring new gadgets. 
      </Typography>
    </div>
  )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);
