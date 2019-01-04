import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Desktop from '@material-ui/icons/DesktopWindows';
import ListIcon from '@material-ui/icons/ListAlt';
import Web from '@material-ui/icons/Web';

import styles from './HomeStyles.js';
import overrides from './TypographyOverrides';

const cpu_xs = require('assets/img/cpu_xs.jpg');
const cpu_sm = require('assets/img/cpu_sm.jpg');
const cpu_md = require('assets/img/cpu_md.jpg');
const cpu_lg = require('assets/img/cpu_lg.jpg');

const Typography = withStyles(overrides)(MuiTypography);

class LandingPage extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.home}>

        <div className={classes.pictureDiv}>
          <picture className={classes.picture}>
            <source
              media={'(min-width: 1921px)'}
              srcSet={cpu_lg}
              type={'image/jpeg'}
            />
            <source
              media={'(min-width: 961px)'}
              srcSet={`${cpu_md} 1x, ${cpu_lg} 2x`}
              type={'image/jpeg'}
            />
            <source
              media={'(min-width: 461px)'}
              srcSet={`${cpu_sm} 1x, ${cpu_md} 2x`}
              type={'image/jpeg'}
            />
            <source
              srcSet={`${cpu_xs} 1x, ${cpu_sm} 2x`}
              type={'image/jpeg'}
            />
            <img
              className={classes.image}
              src={cpu_xs}
              srcSet={`${cpu_xs} 460w, ${cpu_sm} 960w, ${cpu_md} 1920w, ${cpu_lg} 3840w`}
              alt={'background of a cpu'}
              type={'image/jpeg'}
            />
          </picture>

          <div className={classes.overlay}>
            <div className={classes.primaryBackground}>
              <Typography variant='h1' color='primary'>
                Passion to Create
              </Typography>
            </div>
            <div className={classes.secondaryBackground}>
              <Typography variant='h2' color='inherit'>
                Drive to Succeed
              </Typography>
            </div>
          </div>

        </div>

        <div className={classes.featured}>

          <div className={classes.featuredHeader}>
            <Typography variant='h1' color='inherit'>
              Featured
            </Typography>
          </div>

          <Grid container spacing={24} justify='center' className={classes.featuredGrid}>

            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={6}>
                <ButtonBase
                  className={classes.featuredElem}
                  href='https://github.com/acdoussan/react-personal-website'
                >
                  <div className={classes.featuredElemTopLiner}></div>

                  <div className={classes.featuredContent}>
                    <Desktop className={classes.featuredIcon}/>

                    <div className={classes.featuredTitle}>
                      <Typography variant='h4'>
                        React Website
                      </Typography>
                      <div className={classes.featuredTitleUnderline}></div>
                    </div>

                    <Typography variant='h5'>
                      This website, created with React and Material-UI.
                    </Typography>
                  </div>

                </ButtonBase>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={6}>
                <ButtonBase
                  className={classes.featuredElem}
                  href='https://github.com/acdoussan/acdoussan.github.io'
                >
                  <div className={classes.featuredElemTopLiner}></div>

                  <div className={classes.featuredContent}>
                    <Web className={classes.featuredIcon}/>

                    <div className={classes.featuredTitle}>
                      <Typography variant='h4'>
                        Old Website
                      </Typography>
                      <div className={classes.featuredTitleUnderline}></div>
                    </div>

                    <Typography variant='h5'>
                      My old website, created with HTML, CSS, and Javascript.
                    </Typography>
                  </div>

                </ButtonBase>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={6}>
                <ButtonBase
                  className={classes.featuredElem}
                  component={Link}
                  to='/resume'
                >
                  <div className={classes.featuredElemTopLiner}></div>

                  <div className={classes.featuredContent}>
                    <ListIcon className={classes.featuredIcon}/>

                    <div className={classes.featuredTitle}>
                      <Typography variant='h4'>
                        Resume
                      </Typography>
                      <div className={classes.featuredTitleUnderline}></div>
                    </div>

                    <Typography variant='h5'>
                      My personal resume.
                    </Typography>
                  </div>

                </ButtonBase>
              </Paper>
            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
