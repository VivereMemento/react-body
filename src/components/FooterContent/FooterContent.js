import React from 'react';
import { Route } from 'react-router-dom';
import PageLayout from '../PageLayout/PageLayout';
import StepsList from '../StepsList/StepsList';

import './footer.scss';
const { Container } = PageLayout;

const FooterContent = (props) => {

	return (
		<Container>
			<div className="footer__content">
				<Route path="/:gender?/:step?" render={({match}) => {
					const { params: { gender, step }} = match;
					return ( 
						gender && step
							? <StepsList />
							: `© ${ new Date().getFullYear()} Fitness`
					)
				}} />
			</div>
		</Container>
	)
}
export default FooterContent;