import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Redux/reducer'

let storeObject = createStore(reducer)

ReactDOM.render(
  <Provider store={storeObject}>
    <App />
  </Provider>
, document.getElementById('root'));
