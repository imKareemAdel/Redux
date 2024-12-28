import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // تأكد من استيراد Provider
import store from './redux/store';       // تأكد من استيراد الـ store
import App from './App';

ReactDOM.render(
  <Provider store={store}>  {/* تأكد من تغليف الـ App بـ Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
