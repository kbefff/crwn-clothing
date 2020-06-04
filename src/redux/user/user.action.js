//fucntions tht return objects

export const setCurrentUser = user => ({ //takes one item
    type: 'SET_CURRENT_USER',
    payload: user
});