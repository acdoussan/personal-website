import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './ProjectsStyles.js';

import Warning from '@material-ui/icons/WarningRounded';

class Resume extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.resume}>
        <Paper className={classes.paper} elevation={6}>
          <Typography variant="h3" className={classes.header}>
            <Warning className={classes.icon} />
            <span className={classes.title}>Under Construction!</span>
          </Typography>

          <Typography variant="subtitle1" className={classes.text}>
            {'For now, check out my Github\u00a0'}
            <a href='https://github.com/acdoussan' target='_blank' rel='noopener noreferrer'>here</a>
            {'.'}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Resume);
