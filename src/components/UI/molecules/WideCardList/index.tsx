import React from 'react';

import type { WideCardListProps } from './WideCardList.types';
import { WideCardListWrapper } from './WideCardList.styles';

import WideCard from '@molecules/WideCard';

const WideCardList = ({ advantageInformations }: WideCardListProps) => {
	return (
		<WideCardListWrapper>
			{advantageInformations.map(advantageInfo => (
				<WideCard advantageInfo={advantageInfo} />
			))}
		</WideCardListWrapper>
	);
};

export default WideCardList;
