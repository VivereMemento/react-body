import React from 'react';
import PageLayout from './PageLayout/PageLayout';

const { Container } = PageLayout;

const Error = props => (
	<Container>
		<span style={{display: 'flex', justifyContent: 'center', fontSize: '45px'}}>'Error'</span>
	</Container>
);

export default Error;