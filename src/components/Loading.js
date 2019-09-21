import React from 'react';
import PageLayout from './PageLayout/PageLayout';

const { Container } = PageLayout;

const Loading = props => (
	<Container>
		<span style={{display: 'flex', justifyContent: 'center', fontSize: '45px'}}>'Loading'</span>
	</Container>
);

export default Loading;