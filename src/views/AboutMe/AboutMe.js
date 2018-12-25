import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './AboutMeStyles.js';

class AboutMe extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.App}>
        <p>About me!</p>
      </div>
    );
  }
}

export default withStyles(styles)(AboutMe);
