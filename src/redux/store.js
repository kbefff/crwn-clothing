// the middleware between action and root recuder ar functions that recieve objets, do something with them, then pass them out
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; // makes it easier to understand what we're doing

import rootReducer from './root-reducer';

// setup middleware
// the middleware the store is expecting from us is going to be an array
// spread all items in middleware into applyMiddleware function
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);