import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './ResumeStyles.js';

import Warning from '@material-ui/icons/WarningRounded';

import ResumePDF from 'assets/img/Resume.pdf';

class Resume extends Component
{
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

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
            {'For now, check out my resume\u00a0'}
            <a href={ResumePDF} target='_blank' rel='noopener noreferrer'>here</a>
            {'.'}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Resume);
