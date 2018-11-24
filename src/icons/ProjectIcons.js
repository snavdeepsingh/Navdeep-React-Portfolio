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

function ProjectIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
    </SvgIcon>
  );
}

function ProjectIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ProjectIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
    </div>
  );
}

ProjectIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectIcons);