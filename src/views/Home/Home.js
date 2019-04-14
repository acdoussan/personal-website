import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';

import Desktop from '@material-ui/icons/DesktopWindows';
import ListIcon from '@material-ui/icons/ListAlt';
import Web from '@material-ui/icons/Web';

import FeaturedItem from './FeaturedItem.js';

import styles from './HomeStyles.js';
import overrides from './TypographyOverrides';

import cpuXS from 'assets/img/cpu_xs.jpg';
import cpuSM from 'assets/img/cpu_sm.jpg';
import cpuMD from 'assets/img/cpu_md.jpg';
import cpuLG from 'assets/img/cpu_lg.jpg';

const Typography = withStyles(overrides)(MuiTypography);

class Home extends Component
{
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.home}>

        <div className={classes.pictureDiv}>
          <picture className={classes.picture}>
            <source
              media={'(min-width: 1921px)'}
              srcSet={cpuLG}
              type={'image/jpeg'}
            />
            <source
              media={'(min-width: 961px)'}
              srcSet={`${cpuMD} 1x, ${cpuLG} 2x`}
              type={'image/jpeg'}
            />
            <source
              media={'(min-width: 461px)'}
              srcSet={`${cpuSM} 1x, ${cpuMD} 2x`}
              type={'image/jpeg'}
            />
            <source
              srcSet={`${cpuXS} 1x, ${cpuSM} 2x`}
              type={'image/jpeg'}
            />
            <img
              className={classes.image}
              src={cpuXS}
              srcSet={`${cpuXS} 460w, ${cpuSM} 960w, ${cpuMD} 1920w, ${cpuLG} 3840w`}
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

export default withStyles(styles)(Home);
