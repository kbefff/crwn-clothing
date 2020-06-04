//fucntions tht return objects
import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({ //takes one item
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});