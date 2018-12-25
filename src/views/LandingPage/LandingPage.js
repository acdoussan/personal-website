import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './LandingPageStyles.js';

class LandingPage extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.App}>
        <p>Hello, World!</p>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
