import UserActiontypes from './user.actiontypes';

const INITIAL_STATE={
    currentUser:null
}

const UserReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case UserActiontypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser:action.payload
        }

        default:
            return state;
    }
}

export default UserReducer;