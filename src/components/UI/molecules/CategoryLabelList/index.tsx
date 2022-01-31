import React from 'react';

import type { CategoryLabelListProps } from './CategoryLabelList.types';
import { CategoryLabelListWrapper } from './CategoryLabelList.styles';

import CategoryLabel from '@atoms/CategoryLabel';

const CategoryLabelList = ({ style, categories }: CategoryLabelListProps) => {
	return (
		<CategoryLabelListWrapper style={style}>
			{categories.map(category => (
				<CategoryLabel text={category} />
			))}
		</CategoryLabelListWrapper>
	);
};

export default CategoryLabelList;
