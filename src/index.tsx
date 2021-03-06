import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from 'components/routes/scroll-to-top';
import { SettingsProvider } from 'context/settings-context';
if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#1890ff' },
  },
  typography: {
    fontFamily:
      "Montserrat,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <SettingsProvider>
          <ScrollToTop />
          <App />
        </SettingsProvider>
      </Router>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
