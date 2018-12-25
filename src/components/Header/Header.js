import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Code from '@material-ui/icons/Code';

import styles from './HeaderStyles.js'

const headerLinks = [{title: 'Home', route: '/'}, {title: 'About Me', route: '/about'}];

class Header extends Component
{
  handleChange(value)
  {
    this.props.history.push(headerLinks[value].route);
  }

  render()
  {
    const { classes } = this.props;

    return (
      <AppBar color='primary'>
        <Toolbar>
          <Button variant='contained' color='primary' href='/' className={classes.logo}>
            <Code className={classes.code}/>
            <div>
              <Typography variant='h5' color='inherit'>
                Adam Doussan
              </Typography>
              <Typography variant='subtitle1' color='inherit'>
                Software Engineer
              </Typography>
            </div>
          </Button>
          <div className={classes.grow}></div>
          <Tabs
            value={headerLinks.map((x) => x.route).indexOf(this.props.location.pathname)}
            onChange={(evt, value) => this.handleChange(value)}
            className={classes.links}
          >
            {
              headerLinks.map((item, idx) =>
              {
                return (<Tab label={item.title} key={idx} />);
              })
            }
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  active: PropTypes.string,
}

Header.defaultProps = {
  active: '',
}

export default withStyles(styles)(withRouter(Header));
