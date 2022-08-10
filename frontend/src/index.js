import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" type="text/css" href="https://dtt1c9id3txwq.cloudfront.net/themes/16195/assets/stylesheets/manifest-main-c3a0da30d701eb2e1132b7821b8de24bddbe06a0471e45267cb2f361f0a7cfa3.css?1657951192" />



ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
 document.getElementById('root')
);
reportWebVitals();
