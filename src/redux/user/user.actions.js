import UserActionTypes from './user.actiontypes';

export const setCurrentUser=users=>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:users
});