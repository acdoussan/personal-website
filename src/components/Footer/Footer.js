import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './FooterStyles.js';

class Footer extends Component
{
  render()
  {
    const { classes } = this.props;

    const year = new Date().getFullYear();

    return (
      <div className={classes.footer}>
        <Grid container spacing={24} className={classes.container}>

          <Grid item xs={12} sm={6} className={classes.leftFooter}>
            <Typography variant='subtitle1' color='inherit'>
              ©{year} Adam Doussan.
            </Typography>
            <Typography variant='subtitle1' color='inherit'>
              ACDoussan@gmail.com
            </Typography>
            <Typography variant='subtitle1' color='inherit'>
              (727) 453-1807
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.rightFooter}>
            <ButtonBase component={Link} to={'/'} className={classes.link}>
              <Typography variant='subtitle1' color='inherit'>
                Home
                <div className={classes.underline}></div>
              </Typography>
            </ButtonBase>
            <ButtonBase component={Link} to={'/about'} className={classes.link}>
              <Typography variant='subtitle1' color='inherit'>
                About Me
                <div className={classes.underline}></div>
              </Typography>
            </ButtonBase>
            <ButtonBase component={Link} to={'/resume'} className={classes.link}>
              <Typography variant='subtitle1' color='inherit'>
                Resume
                <div className={classes.underline}></div>
              </Typography>
            </ButtonBase>
            <ButtonBase component={Link} to={'/projects'} className={classes.link}>
              <Typography variant='subtitle1' color='inherit'>
                Projects
                <div className={classes.underline}></div>
              </Typography>
            </ButtonBase>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
