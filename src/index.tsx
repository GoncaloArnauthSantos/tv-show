import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeStore } from './store/state/store';
import Home from './components/templates/home';
import BaseLayout from './components/templates/baseLayout';
import Show from './components/templates/show';

ReactDOM.render(
  <Provider store={initializeStore}>

    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-show/:id" element={<Show />} />
          <Route path="/episode/:id" element={<div> episode </div>} />

          <Route path="*" element={<div> error page </div>} />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  </Provider>,
  document.getElementById('root'),
);
