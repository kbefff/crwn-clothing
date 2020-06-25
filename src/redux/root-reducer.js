// represents the overall reducer
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //this gives us the actual local storage on window browser

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
    key: 'root', //we want to start storing things at the root
    storage,
    whitelist: ['cart'] //the only thing we want to whitelist, the only reducer we want to persist is the cart
    //this is because firebase handles the user reducer
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);