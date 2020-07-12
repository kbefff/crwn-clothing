export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id) // will return you the first item found based off of condition

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )//return new array --> need to return new state for proper rendering
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    // if existing cart item q is 1, remove
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        ) 
    };

    // else, decrement
    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )

};