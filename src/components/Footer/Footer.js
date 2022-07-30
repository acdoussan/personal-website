import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import EmailIcon from '@material-ui/icons/Email';

import linkedin from 'assets/img/linkedin.png';
import gitlab from 'assets/img/gitlab.png';

import styles from './FooterStyles.js';

const handleEmailClick = (e) =>
{
  window.open('mailto: ACDoussan@gmail.com');
  e.preventDefault();
};

class Footer extends Component
{
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render()
  {
    const { classes } = this.props;

    const year = new Date().getFullYear();

    return (
      <div className={classes.footer}>
        <Grid container spacing={24} className={classes.container}>

          <Grid item xs={12} sm={6} className={classes.leftFooter}>

            <Typography variant='subtitle1' color='inherit'>
              © {year} Adam Doussan
            </Typography>

            <ButtonBase
              component={Link}
              to={'#'}
              onClick={handleEmailClick}
              className={classes.link}
            >
              <div>
                <div className={classes.buttonContent}>
                  <div className={classes.icon}>
                    <EmailIcon />
                  </div>

                  <Typography variant='subtitle1' color='inherit'>
                    ACDoussan@gmail.com
                  </Typography>
                </div>
                <div className={classes.underline}></div>
              </div>
            </ButtonBase>

            <ButtonBase
              component={Link}
              to={{ pathname: 'https://www.linkedin.com/in/acdoussan/' }}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <div>
                <div className={classes.buttonContent}>
                  <div className={classes.icon}>
                    <img
                      src={linkedin}
                      alt={'linkedin logo'}
                      type={'image/png'}
                      className={classes.iconImg}
                    />
                  </div>

                  <Typography variant='subtitle1' color='inherit'>
                    acdoussan
                  </Typography>
                </div>
                <div className={classes.underline}></div>
              </div>
            </ButtonBase>

            <ButtonBase
              component={Link}
              to={{ pathname: 'https://gitlab.com/acdoussan' }}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <div>
                <div className={classes.buttonContent}>
                  <div className={classes.icon}>
                    <img
                      src={gitlab}
                      alt={'gitlab logo'}
                      type={'image/png'}
                      className={classes.iconImg}
                    />
                  </div>

                  <Typography variant='subtitle1' color='inherit'>
                    acdoussan
                  </Typography>
                </div>
                <div className={classes.underline}></div>
              </div>
            </ButtonBase>
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
