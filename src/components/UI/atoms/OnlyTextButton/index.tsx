import React from 'react';

import type { OnlyTextButtonProps } from './OnlyTextButton.types';
import { OnlyTextButtonWrapper } from './OnlyTextButton.styles';

const OnlyTextButton = ({ text, style }: OnlyTextButtonProps) => {
	return <OnlyTextButtonWrapper style={style}>{text}</OnlyTextButtonWrapper>;
};

export default OnlyTextButton;
