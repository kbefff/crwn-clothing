import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter}  from 'react-router-dom'
import { Provider } from 'react-redux;' // a component we want to wrap around the entire app because we want 
//everything in the app to have acess to the store object we get from react
// the provide is a component that is the parent of everythign in the app.

import './index.css';
import App from './App';
import store from '.redux/store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

