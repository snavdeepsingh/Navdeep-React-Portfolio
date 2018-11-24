import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: blue[800],
    },
  },
});

function ContactIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/>
    </SvgIcon>
  );
}

function ContactIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ContactIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
    </div>
  );
}

ContactIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactIcons);