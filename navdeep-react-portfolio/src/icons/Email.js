import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import  blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconHover: {
      color: 'white',
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: blue[800],
    },
  },
});

function EmailIcon(props) {
  return (
    <SvgIcon {...props}>
     <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
    </SvgIcon>
  );
}

function EmailIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <EmailIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
    </div>
  );
}

EmailIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailIcons);