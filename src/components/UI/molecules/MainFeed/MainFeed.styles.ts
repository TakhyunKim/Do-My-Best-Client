import { CSSProperties } from 'react';

import styled from 'styled-components';

const MainFeedWrapper = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20%;

	background-color: #0065ff;
`;

const MainFeedTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 50%;
	height: 100%;

	font-family: NanumGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;

	color: #ffffff;
`;

const MainFeedContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
`;

const svgStyle: CSSProperties = { margin: '13px 0' };

const buttonStyle: CSSProperties = {
	width: '160px',
	height: '40px',
	margin: '15px 0',

	border: '2px solid #ffffff',
	color: '#ffffff',
};

export { MainFeedWrapper, MainFeedTextWrapper, MainFeedContainer, svgStyle, buttonStyle };
