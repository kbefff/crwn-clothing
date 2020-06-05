import CartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: [] //add items into array or clear them out depending on the feature;
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
            hidden: !state.hidden
        };
        default:
            return state;
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

    }
};

export default cartReducer;