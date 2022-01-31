import styled from 'styled-components';

const WideCardWrapper = styled.article`
	display: flex;
	align-items: center;
	width: 450px;
	height: 85px;
	margin: 0px 10px 10px 10px;

	border: 1px solid #c4c4c4;
	border-radius: 10px;

	cursor: pointer;

	:hover {
		background-color: rgba(0, 101, 255, 0.2);
		border: 1px solid #0065ff;

		transform: scale(1.02);
		transition: all ease 0.7s;
	}
`;

const CardTextWrapper = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	height: 70px;
	margin-left: 10px;
`;

export { WideCardWrapper, CardTextWrapper };
