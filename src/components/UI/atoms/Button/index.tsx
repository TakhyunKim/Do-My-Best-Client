import React from 'react';

import type { ButtonProps } from './Button.types';
import { ButtonWrapper } from './Button.styles';

const Button = ({ text, style }: ButtonProps) => {
	return <ButtonWrapper style={{ ...style }}>{text}</ButtonWrapper>;
};

export default Button;
