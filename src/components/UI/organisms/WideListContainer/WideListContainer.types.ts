import { CSSProperties } from 'react';

import { AdvantageInformation } from '@common/types';

import { LabelButtonProps } from '@molecules/LabelButton/LabelButton.types';

interface WideListContainerProps extends LabelButtonProps {
	styles?: CSSProperties;
	advantageInformations: AdvantageInformation[];
}

export type { WideListContainerProps };
