import React from 'react';

import type { CategoryLabelProps } from './CategoryLabel.types';
import { CategoryLabelWrapper } from './CategoryLabel.styles';

const CategoryLabel = ({ text, style }: CategoryLabelProps) => {
	return <CategoryLabelWrapper style={style}>{text}</CategoryLabelWrapper>;
};

export default CategoryLabel;
