import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/cart.actions';

import {
  Item,
  ImageContainer,
  Image,
  QuantityContainer,
  Name,
  Price,
  Quantity,
  Arrow,
  RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Item>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <Name>{name}</Name>
      <QuantityContainer>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Quantity>{quantity}</Quantity>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>
      <Price>{price}</Price>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </Item>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
