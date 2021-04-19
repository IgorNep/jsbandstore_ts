import React from 'react';
import ReactDOM from 'react-dom';
import App from './navigation/App';
import { Provider } from 'react-redux';
import store from '../src/core/store';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/theme/globalStyles';
import Theme from './assets/theme/theme';

const root = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ThemeProvider>,
  root,
);
