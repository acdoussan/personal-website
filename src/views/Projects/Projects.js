import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './ProjectsStyles.js';

class Projects extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.projects}>
        <p>Projects!</p>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
