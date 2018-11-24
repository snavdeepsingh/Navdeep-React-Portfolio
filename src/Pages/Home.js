import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ImageAvatar from '../components/ImageAvatar';

const styles = {
    root: {
        margin: 'auto',
      width: '100%',
      marginTop: "100px",
      marginBottom: "100px",
      backgroudColor: "#4f5352",
      textAlign: 'center',
      display: 'block'
    },
    subheading: {
        margin: 'auto',
        width: '60%',
        display: 'block',
        textAlign: 'auto',
    }
  };

const Home = (props) => {
    const { classes } = props;
  return (
    <div className={classes.root}  > 
      <ImageAvatar />
      <Typography variant="display2" gutterBottom>
       About me
      </Typography>
      <hr  width="60%"/>
      <Typography className={classes.subheading} variant="subheading" gutterBottom>
        Hi, my name is Navdeep Singh and I love to write code that is efficient. I enjoy innovating without reinventing the wheel! Coding is my passion and I enjoy both front end and back end. 
      </Typography>
      <br />
      <Typography className={classes.subheading} variant="subheading" gutterBottom> 
      Previously I had 18 years of experience within the restaurant industry. During this time, I rose through the ranks from a front line cook to co-founding two successful restaurant concepts in Austin.
      </Typography>
      <br />
      <Typography className={classes.subheading} variant="subheading" gutterBottom><strong>Coding Languages:  </strong> JavaScript (Node.js, Express.js, API Development, MVC Framework, Sequelize)
      </Typography>
      <Typography className={classes.subheading} variant="subheading" gutterBottom><strong>Website Technologies:  </strong> HTML5, CSS, JavaScript (React.js, Redux, jQuery, Bootstrap, Handlebars)
      </Typography>
      <Typography className={classes.subheading} variant="subheading" gutterBottom><strong>Databases:  </strong> MySQL, MongoDB
      </Typography>
      <Typography className={classes.subheading} variant="subheading" gutterBottom><strong>Other Technical Skills:  </strong> Git (Versioning Management System), Agile, Firebase
      </Typography> 
    </div>
  )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);
