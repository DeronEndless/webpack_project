import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import Nav from '@/components/Nav';
import getRouter from '@/router';
import {Provider} from 'react-redux';
import store from '@/redux/store';

ReactDom.render(
  <Provider store={store}>
    <Router>
      {getRouter()}
    </Router>
  </Provider>,
  document.getElementById('app')
)