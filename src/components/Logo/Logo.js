import React from 'react';

import './logo.scss';
import logo from './logo.svg';

const Logo = (props) => (
	<div className="logo">
		<img src={logo} alt="Bodyfit" className="logo__img"/>
	</div>
);

export default Logo;