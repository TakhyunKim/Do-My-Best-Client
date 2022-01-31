import React from 'react';

import type { OnlyTextButtonProps } from './OnlyTextButton.types';
import { OnlyTextButtonWrapper } from './OnlyTextButton.styles';

const OnlyTextButton = ({ text }: OnlyTextButtonProps) => {
	return <OnlyTextButtonWrapper>{text}</OnlyTextButtonWrapper>;
};

export default OnlyTextButton;
