import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CustomButtonContainer,
  CollectionItemContainer,
  CollectionFooterContainer,
  ImageContainer,
  Price,
  Name,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooterContainer>
      <CustomButtonContainer inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchProps)(CollectionItem);
