import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, totalItems }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{totalItems}</span>
	</div>
);

const mapDispatchProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
	totalItems: cartItems.reduce(
		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity
		, 0
	)
})

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);