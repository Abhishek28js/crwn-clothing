import {combineReducers} from 'redux';
import UserReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';


export default combineReducers({
    users:UserReducer,
    cart:cartReducer
})