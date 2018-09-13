import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './antd-mobile.css';
import './index.css';
import './config.js';
import './utils/fontAwesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
 