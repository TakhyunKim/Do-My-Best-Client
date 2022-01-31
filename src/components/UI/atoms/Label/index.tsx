import React from 'react';

import { LabelProps } from './Label.types';

const Label = ({ text }: LabelProps) => {
	return <p>{text}</p>;
};

export default Label;
