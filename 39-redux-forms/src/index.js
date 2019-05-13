import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// createStore, reducer are functions
import { createStore } from 'redux'
import reducer from './Redux/reducer'
// Provider is a component
import { Provider } from 'react-redux'

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
