import React from 'react';

import { Item, Image, Details, Name, Price } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <Item>
    <Image src={imageUrl} alt="item" />
    <Details>
      <Name>{name}</Name>
      <Price>
        {quantity} x ${price}
      </Price>
    </Details>
  </Item>
);

export default CartItem;
