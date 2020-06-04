// a reducer is just a fucntion that gets two properties
// it gets a state object (initial state) and then it recieves an action
// the action is just an object athat has a type which is a string value that tells us specific acions
// we want to make sure our reducers are aware of different actions and that is going to be based off of type
// payload --> may or may not have. the payload can be anything. the only reason we can say it's anything
// is because maybe with the payload object we want to do something with it to update the state
// we may pass an object that we may set as our state or use to make transformations
import { UserActionTypes } from './user.types'


const INITIAL_STATE = {
    currentUser: null // use as detaulf paramater value for state
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) { // base on action type value
        case UserActionTypes.SET_CURRENT_USER:
            return { //return new objet out of reducer item
                ...state,
                currentUser: action.payload
            }
        //every reducer gets every single action that ever gets fired, even if those actions are not related
        // to this reducer. so the reason we want to default return state is because if no actions match inside
        // switch statement then we jsut want the current state
        default:
            return state;

    }
}

export default userReducer;