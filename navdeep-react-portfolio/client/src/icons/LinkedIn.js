import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconHover: {
      color: 'blue',
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[900],
    },
  },
});

function LinkedInIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
    </SvgIcon>
  );
}

function LinkedInIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinkedInIcon className={classes.iconHover} color="error" style={{fontSize: props.fontSize}} />
    </div>
  );
}

LinkedInIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinkedInIcons);