import React from 'react';

import CollectionItem from './../collection-item/collection-item.collection';

import {Collection, Title, Preview} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
	<Collection>
		<Title>{title.toUpperCase()}</Title>
		<Preview> {
			items
				.filter((item, index) => index < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
		</Preview>
	</Collection>
);

export default CollectionPreview;