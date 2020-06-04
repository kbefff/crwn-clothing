//fucntions tht return objects

export const serCurrentUser = user => ({ //takes one item
    type: 'SET_CURRENT_USER',
    payload: user
});