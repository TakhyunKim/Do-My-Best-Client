import React from 'react';

import type { LabelButtonProps } from './LabelButton.types';
import { LabelButtonWrapper } from './LabelButton.styles';

import Button from '@atoms/Button';
import Label from '@atoms/Label';

const LabelButton = ({
	buttonText,
	labelText,
	buttonStyle,
	labelStyle,
	wrapperStyle,
}: LabelButtonProps) => {
	return (
		<LabelButtonWrapper style={wrapperStyle}>
			<Label text={labelText} style={labelStyle} />
			<Button text={buttonText} style={buttonStyle} />
		</LabelButtonWrapper>
	);
};

export default LabelButton;
