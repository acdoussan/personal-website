import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';

import routes from 'routes/index.js';

import theme from './theme.js'

import 'assets/css/baseStyles.css';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <div>
        <Header />
        <div style={{marginTop: '75px'}}>
          <Switch>
            {routes.map((route, idx) =>
            {
              return <Route path={route.path} key={idx} component={route.component} />;
            })}
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
