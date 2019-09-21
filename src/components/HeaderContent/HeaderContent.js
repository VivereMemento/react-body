import React from 'react';
import { Route } from 'react-router-dom';
import PageLayout from '../PageLayout/PageLayout';
import Logo from '../Logo/Logo';
import Nav from '../Navigation/Nav';

import './header.scss';

const { Container } = PageLayout;

const HeaderContent = (props) => {

	return (
		<Container>
			<Route path='/:gender?/:step?' render={ ({match}) => {

				const { params: { gender, step}, url } = match; 

				return (
					url !== '/final'
						? <div className="header__content">
								<Logo />
								<Nav />
							</div>
						: null
				)
			}} />
		</Container>
	)
}
export default HeaderContent;