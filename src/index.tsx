import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeStore } from './store/state/store';
import Home from './components/templates/home';

ReactDOM.render(
  <Provider store={initializeStore}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
