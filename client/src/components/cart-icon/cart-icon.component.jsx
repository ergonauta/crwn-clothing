import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsQuantity } from '../../redux/cart/cart.selectors';

import { Container, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, totalItems }) => (
  <Container onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount>{totalItems}</ItemCount>
  </Container>
);

const mapDispatchProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  totalItems: selectCartItemsQuantity,
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
