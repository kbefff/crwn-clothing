import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter}  from 'react-router-dom';
import { Provider } from 'react-redux'; // a component we want to wrap around the entire app because we want 
// everything in the app to have access to the store object we get from react
// the provider is a component that is the parent of everythign in the app.
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

