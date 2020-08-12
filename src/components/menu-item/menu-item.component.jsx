import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Item,
  BackgroundImage,
  Content,
  Title,
  Subtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <Item size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImage imageUrl={imageUrl} />
    <Content>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </Item>
);

export default withRouter(MenuItem);
