import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';

import Desktop from '@material-ui/icons/DesktopWindows';
import ListIcon from '@material-ui/icons/ListAlt';
import Web from '@material-ui/icons/Web';

import FeaturedItem from './FeaturedItem.js';

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
              <FeaturedItem
                Icon={Desktop}
                url='https://github.com/acdoussan/react-personal-website'
                header='React Website'
                text='This website, created with React and Material-UI.'
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FeaturedItem
                Icon={Web}
                url='https://github.com/acdoussan/acdoussan.github.io'
                header='Old Website'
                text='My old website, created with HTML, CSS, and Javascript.'
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FeaturedItem
                Icon={ListIcon}
                url='/resume'
                header='Resume'
                text='My personal resume.'
                link
              />
            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
