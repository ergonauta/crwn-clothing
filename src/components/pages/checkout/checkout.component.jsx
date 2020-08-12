import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../../redux/cart/cart.selectors';

import CheckoutItem from '../../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../stripe-button/stripe-button.component';
import { Checkout, Header, Block, Total } from './checkout.styles';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <Checkout>
    <Header>
      <Block>
        <span>Product</span>
      </Block>
      <Block>
        <span>Description</span>
      </Block>
      <Block>
        <span>Quantity</span>
      </Block>
      <Block>
        <span>Price</span>
      </Block>
      <Block>
        <span>Remove</span>
      </Block>
    </Header>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>
      <span>${cartTotal}</span>
    </Total>
    <StripeCheckoutButton price={cartTotal} />
  </Checkout>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
