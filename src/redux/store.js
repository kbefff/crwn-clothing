// the middleware between action and root recuder ar functions that recieve objets, do something with them, then pass them out
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // makes it easier to understand what we're doing

import rootReducer from './root-reducer';

// setup middleware
// the middleware the store is expecting from us is going to be an array
const middlewares = [logger];

// spread all items in middleware into applyMiddleware function
const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;