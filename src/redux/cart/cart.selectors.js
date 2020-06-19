import {
    createSelector
} from 'reselect';

// input selector = a function that takes namig structure
// of gets the whole state and just returns a slice of it, one layer deep ususally
const selectCart = state => state.cart;

export const selectCartItems = createSelector( //this is a memoized selector
    [selectCart], //array of input slecteros
    (cart) => cart.cartItems //function that returns the value we want out of the slector
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
        0
    )
)