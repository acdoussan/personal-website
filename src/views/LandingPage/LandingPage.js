import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Header from 'components/Header/Header.js';

import styles from './LandingPageStyles.js';

class LandingPage extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className="App">
        <Header active='Home'/>
        <div className={classes.headerFix}>
          <p>Hello, World!</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
