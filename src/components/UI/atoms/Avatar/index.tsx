import React from 'react';

import type { AvatarProps } from './Avatar.types';
import { AvatarWrapper } from './Avatar.styles';

const Avatar = ({ image, style }: AvatarProps) => {
	return <AvatarWrapper style={style}>{image && <img src={image} />}</AvatarWrapper>;
};

export default Avatar;
