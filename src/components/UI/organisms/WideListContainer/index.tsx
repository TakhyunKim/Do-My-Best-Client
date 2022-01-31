import React from 'react';

import type { WideListContainerProps } from './WideListContainer.types';
import { WideListContainerWrapper } from './WideListContainer.styles';

import WideCardList from '@molecules/WideCardList';
import LabelButton from '@molecules/LabelButton';

const WideListContainer = ({
	styles,
	advantageInformations,
	buttonText,
	labelText,
	buttonStyle,
	labelStyle,
	wrapperStyle,
}: WideListContainerProps) => {
	return (
		<WideListContainerWrapper style={styles}>
			<LabelButton
				buttonText={buttonText}
				labelText={labelText}
				buttonStyle={buttonStyle}
				labelStyle={labelStyle}
				wrapperStyle={wrapperStyle}
			/>
			<WideCardList advantageInformations={advantageInformations} />
		</WideListContainerWrapper>
	);
};

export default WideListContainer;
