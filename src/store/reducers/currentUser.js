import {SET_CURRENT_USER} from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, //True after login
  user: {} //All the user information after login
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length, //Turns empty {} into false, or if keys, true
        user: action.user
      };
      default:
        return state;
  }
}
