import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ContactIcons from "../icons/ContactIcons";

const styles = theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  },
});

class MouseOverPopoverContact extends React.Component {
  state = {
    anchorEl: null,
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
        >
          <ContactIcons />
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>Contact</Typography>
        </Popover>
      </div>
    );
  }
}

MouseOverPopoverContact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MouseOverPopoverContact);