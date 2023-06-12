import React from 'react';
import ReactDOM from 'react-dom';
// !Error said BrowserRouter was running twice and we already had it in App.js
// import { BrowserRouter } from 'react-router-dom';
// !I still don't know about react-redux but some guy on Stack OverFlow was having issues 
// import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// import store from './store'; 

ReactDOM.render(
  <React.StrictMode>
        {/* <Provider> */}
    {/* <Provider store={store}> */}
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
