import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeStore } from './store/state/store';
import Home from './components/templates/home';
import BaseLayout from './components/templates/baseLayout';

ReactDOM.render(
  <Provider store={initializeStore}>
    <BaseLayout>
      <Home />
    </BaseLayout>
  </Provider>,
  document.getElementById('root'),
);
