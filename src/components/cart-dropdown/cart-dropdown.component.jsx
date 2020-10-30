import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

const CartDropDown=()=>(
    <div className='cart-dropdown'> 
        <div className='cart-items'/>
        <CustomButton>CHECK OUT</CustomButton>
    </div>
)
export default CartDropDown;