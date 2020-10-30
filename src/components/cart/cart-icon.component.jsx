import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {ToggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon=({ToggleCartHidden})=>(
    <div className='cart-icon' onClick={ToggleCartHidden}>
       <ShoppingBag className='shopping-icon'/>
       <span className='item-count'>0</span>
    </div>
)

 const mapDispatchToProps=dispatch=>({
     ToggleCartHidden:()=>dispatch(ToggleCartHidden())
 });

export default connect(null,mapDispatchToProps)(CartIcon);