import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../src/store';
import thunkMiddleware from 'redux-thunk';

const Store = createStore(
  AppReducer,
  applyMiddleware(thunkMiddleware),
);

ReactDOM.render(
  <Provider store={Store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);