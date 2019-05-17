import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import store from './redux/store'
import './index.css';


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
