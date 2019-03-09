import React, { Component } from 'react';

import { withRouter, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import MuiTypography from '@material-ui/core/Typography';

import Code from '@material-ui/icons/Code';
import DeveloperBoard from '@material-ui/icons/DeveloperBoard';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/InfoOutlined';
import ListIcon from '@material-ui/icons/ListAlt';
import Menu from '@material-ui/icons/Menu';

import styles from './HeaderStyles.js';
import overrides from './TypographyOverrides.js';

const Typography = withStyles(overrides)(MuiTypography);

const headerLinks = [
  {title: 'Home', icon: <Home/>, route: '/'},
  {title: 'About Me', icon: <Info/>, route: '/about'},
  {title: 'Resume', icon: <ListIcon/>, route: '/resume'},
  {title: 'Projects', icon: <DeveloperBoard/>, route: '/projects'},
];

class Header extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      drawerIsOpen: false,
    };
  }

  handleChange(value)
  {
    this.props.history.push(headerLinks[value].route);
  }

  toggleDrawer(opened)
  {
    this.setState({drawerIsOpen: opened});
  }

  render()
  {
    const { classes } = this.props;
    const renderSmall = this.props.width === 'xs';

    return (
      <AppBar color='primary' className={classes.header}>
        <Toolbar className={classes.header}>
          <div className={classes.contentLimit}>

            <Link to='/' className={classes.logo}>
              <Button className={classes.button} color='inherit'>
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
            </Link>

            <div className={classes.grow}></div>

            {renderSmall && (
              <div>
                <IconButton className={classes.menuButton} onClick={() => this.toggleDrawer(true)}>
                  <Menu />
                </IconButton>
                <Drawer open={this.state.drawerIsOpen} onClose={() => this.toggleDrawer(false)} anchor='right'>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={() => this.toggleDrawer(false)}
                    onKeyDown={() => this.toggleDrawer(false)}
                  >
                    <List>
                      {
                        headerLinks.map((item, idx) =>
                        {
                          return (
                            <ListItem button key={item.title} onClick={() => this.handleChange(idx)}>
                              <ListItemIcon>{item.icon}</ListItemIcon>
                              <ListItemText primary={item.title}/>
                            </ListItem>
                          );
                        })
                      }
                      <Divider/>
                    </List>
                  </div>
                </Drawer>
              </div>
            )}

            {!renderSmall && (
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
            )}

          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withWidth()(withStyles(styles)(withRouter(Header)));
