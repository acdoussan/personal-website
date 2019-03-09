import React, { Component } from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from './AboutMeStyles.js';

const me_1x = require('assets/img/me_1x_even.png');
const me_2x = require('assets/img/me_2x_even.png');

const ucf_1x = require('assets/img/ucf-logo_1x.png');
const ucf_2x = require('assets/img/ucf-logo_2x.png');

const harris = require('assets/img/harris.png');

class AboutMe extends Component
{
  render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.aboutMe}>

        {/* Me Section */}
        <div className={classNames(classes.entry, classes.me)}>

          <Grid container spacing={0} className={classes.entryContent}>

            <Grid item xs={12} sm={4} className={classNames(classes.entryPicDiv, classes.meEntryPicDiv)}>
              <img
                className={classNames(classes.entryPic, classes.meEntryPic)}
                src={me_2x}
                srcSet={`${me_1x} 1x, ${me_2x} 2x`}
                alt={'of Adam Doussan'}
                type={'image/png'}
              />
            </Grid>

            <Grid item xs={12} sm={8} className={classNames(classes.entryOuterTextWrapper, classes.meEntryOuterTextWrapper)}>
              <div className={classes.entryInnerTextWrapper}>

                <div className={classNames(classes.entryHeader, classes.meEntryHeader)}>
                  <Typography variant='h4' color='inherit'>
                    {"Hi, I'm Adam"}
                  </Typography>
                </div>

                <div className={classNames(classes.entryText, classes.meEntryText)}>
                  <Typography variant='body1' color='inherit'>
                    {
                      "I'm a software engineer from the sunshine state who enjoys a great problem. I " +
                      "love to create efficent, practical solutions to any challenge that comes my " +
                      "way, and I am constantly looking for new things to learn and experience. When " +
                      "I'm not tinkering with my own personal projects, you can find me cruising on my " +
                      "longboard or playing some games with my friends. Want to know more? Check out my "
                    }
                    <a className={classes.meEntryLinkText} href="https://github.com/acdoussan">github</a>
                    {", "}
                    <Link className={classes.meEntryLinkText} to="/resume">resume</Link>
                    {", or contact me directly!"}
                  </Typography>
                </div>

              </div>
            </Grid>

          </Grid>

        </div>
        {/* End Me Section */}

        {/* Education Section */}
        <div className={classes.entry}>

          <Grid container spacing={0} className={classes.entryContent}>

            <Hidden smUp>
              <Grid item xs={12} className={classes.entryPicDiv}>
                <img
                  className={classes.entryPic}
                  src={ucf_2x}
                  srcSet={`${ucf_1x} 1x, ${ucf_2x} 2x`}
                  alt={'UCF Logo'}
                  type={'image/png'}
                />
              </Grid>
            </Hidden>

            <Grid item xs={12} sm={8} className={classes.entryOuterTextWrapper}>
              <div className={classes.entryInnerTextWrapper}>

                <div className={classNames(classes.entryHeader, classes.educationEntryHeader)}>
                  <Typography variant='h4' color='inherit'>
                    {'Education'}
                  </Typography>
                </div>

                <div className={classes.entryText}>
                  <Typography variant='body1' color='inherit'>
                    {
                      "I graduated with a Bachelor of Science in Computer Science from the University " +
                      "of Central Florida (UCF) in May of 2018. While at UCF, I participated in many " +
                      "extracuricular activities and clubs, including Formula Society of Automotive " +
                      "Engineers and UCF's competitive programming team. As a part of these activities," +
                      "I designed a paddle shifting system for a Formula style racecar using an Arduino " +
                      "microcontroller, and I competed against others to solve as many challenging " +
                      "programming problems as I could in the shortest amount of time possible."
                    }
                  </Typography>
                </div>

              </div>
            </Grid>

            <Hidden xsDown>
              <Grid item sm={4} className={classNames(classes.entryPicDiv)}>
                <img
                  className={classNames(classes.entryPic, classes.meEntryPic)}
                  src={ucf_2x}
                  srcSet={`${ucf_1x} 1x, ${ucf_2x} 2x`}
                  alt={'UCF Logo'}
                  type={'image/png'}
                />
              </Grid>
            </Hidden>

          </Grid>

        </div>
        {/* End Education Section */}

        {/* Career Section */}
        <div className={classNames(classes.entry, classes.career)}>

          <Grid container spacing={0} className={classes.entryContent}>

            <Grid item xs={12} sm={4} className={classes.entryPicDiv}>
              <img
                className={classes.entryPic}
                src={harris}
                alt={'Harris Logo'}
                type={'image/png'}
              />
            </Grid>

            <Grid item xs={12} sm={8} className={classes.entryOuterTextWrapper}>
              <div className={classes.entryInnerTextWrapper}>

                <div className={classNames(classes.entryHeader, classes.careerEntryHeader)}>
                  <Typography variant='h4' color='inherit'>
                    {'Career'}
                  </Typography>
                </div>

                <div className={classNames(classes.entryText, classes.careerEntryText)}>
                  <Typography variant='body1' color='inherit'>
                    {
                      "Currently, I am a software engineer employed at Harris Corporation. As a software " +
                      "engineer, I am expected to produce quality software that provides a robust, feature " +
                      "complete solution to a customer need. I am responsible for the software lifecycle " +
                      "from start to finish, including design, implementation, and documentation. I am " +
                      "also expected to be in a constant state of improvement and learning to ensure " +
                      "I am capable of helping the company meet ever changing buisness needs."
                    }
                  </Typography>
                </div>

              </div>
            </Grid>

          </Grid>

        </div>
        {/* End Career Section */}

      </div>
    );
  }
}

export default withStyles(styles)(AboutMe);
