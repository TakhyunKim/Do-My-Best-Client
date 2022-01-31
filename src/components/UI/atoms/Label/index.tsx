import React from 'react';

import type { LabelProps } from './Label.types';
import { LabelWrapper } from './Label.styles';

const Label = ({ text, style }: LabelProps) => {
	return <LabelWrapper style={style}>{text}</LabelWrapper>;
};

export default Label;
