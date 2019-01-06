import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './FeaturedItemStyles.js';

class FeaturedItem extends Component
{
  render()
  {
    const { classes, Icon } = this.props;

    // object that contains props that are spread onto the ButtonBase component.
    const buttonBaseProps = {
      className: classes.featuredItem,
    };

    // if this is a local link, use a link component and to
    if(this.props.link)
    {
      buttonBaseProps.component = Link;
      buttonBaseProps.to = this.props.url;
    }
    // otherwise, set the href prop on the button
    else
    {
      buttonBaseProps.href = this.props.url;
    }

    return (
      <Paper elevation={6}>
        <ButtonBase {...buttonBaseProps} >
          <div className={classes.featuredItemTopLiner}></div>

          <div className={classes.featuredContent}>
            <Icon className={classes.featuredIcon}/>

            <div className={classes.featuredTitle}>
              <Typography variant='h4'>
                {this.props.header}
              </Typography>
              <div className={classes.featuredTitleUnderline}></div>
            </div>

            <Typography variant='h5'>
              {this.props.text}
            </Typography>
          </div>
        </ButtonBase>
      </Paper>
    );
  }
}

FeaturedItem.defaultProps = {
  url: '/',
  Icon: <div></div>,
  header: '',
  text: '',
  link: false,
};

// Icon is expected to be a renderable component, string type is to support a native HTML element (Ex: <div>)
// and func supports native react components.
FeaturedItem.propTypes = {
  url: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.bool,
};

export default withStyles(styles)(FeaturedItem);
