import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './ResumeStyles.js';

class Resume extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.resume}>
        <p>Resume!</p>
      </div>
    );
  }
}

export default withStyles(styles)(Resume);
