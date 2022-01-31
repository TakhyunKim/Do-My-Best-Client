import { CSSProperties } from 'react';

import { AdvantageInformation } from '@common/types';

interface WideCardProps {
	style?: CSSProperties;
	imageURL?: string;
	advantageInfo: AdvantageInformation;
}

export type { WideCardProps };
