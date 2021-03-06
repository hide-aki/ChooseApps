import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import React from 'react';

import App from './App';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
