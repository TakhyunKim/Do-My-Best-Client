import React from 'react';

import { HeaderWrapper } from './Header.styles';

import { ReactComponent as Logo } from '@assets/logo.svg';
import OnlyTextButton from '@components/UI/atoms/OnlyTextButton';

const Header = () => {
	return (
		<HeaderWrapper>
			<Logo />
			<div>
				<OnlyTextButton text="로그인" />
				<OnlyTextButton text="회원가입" />
			</div>
		</HeaderWrapper>
	);
};

export default Header;
