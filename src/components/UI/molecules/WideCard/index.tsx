import React from 'react';

import type { WideCardProps } from './WideCard.types';
import { WideCardWrapper, CardTextWrapper } from './WideCard.styles';

import Avatar from '@atoms/Avatar';
import Label from '@atoms/Label';
import CategoryLabelList from '@molecules/CategoryLabelList';

const WideCard = ({ style, imageURL, advantageInfo: { userName, categories } }: WideCardProps) => {
	return (
		<WideCardWrapper style={style}>
			<Avatar image={imageURL} />
			<CardTextWrapper>
				<Label style={{ marginTop: 0 }} text={userName} />
				<CategoryLabelList categories={categories} />
			</CardTextWrapper>
		</WideCardWrapper>
	);
};

export default WideCard;
