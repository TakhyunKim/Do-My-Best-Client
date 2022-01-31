import React from 'react';

import {
	MainFeedWrapper,
	MainFeedTextWrapper,
	MainFeedContainer,
	svgStyle,
	buttonStyle,
} from './MainFeed.styles';

import { ReactComponent as FeedLogo } from '@assets/feedLogo.svg';
import { ReactComponent as MainFeedImage } from '@assets/mainFeedImage.svg';

import Label from '@atoms/Label';
import Button from '@atoms/Button';

const MainFeed = () => {
	return (
		<MainFeedWrapper>
			<MainFeedContainer>
				<MainFeedTextWrapper>
					<Label text="난 이것만큼은 자신있다." />
					<FeedLogo style={svgStyle} />
					<Label text="나의 장점, 노하우를 공유해봐요." />
					<Label text="많은 사람들과 공유하고 함께 발전해요." />
					<Button text="공유하기" style={buttonStyle} />
				</MainFeedTextWrapper>
				<MainFeedImage style={svgStyle} />
			</MainFeedContainer>
		</MainFeedWrapper>
	);
};

export default MainFeed;
