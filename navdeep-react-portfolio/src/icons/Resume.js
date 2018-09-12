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
  iconHover: {
      color: 'white',
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: blue[800],
    },
  },
});

function ResumeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3h-10v1h10v-1zm-5-6h-5v4h5v-4z"/>
    </SvgIcon>
  );
}

function ResumeIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ResumeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
    </div>
  );
}

ResumeIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeIcons);