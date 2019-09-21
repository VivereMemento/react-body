import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './guarantee.scss';
import PageLayout from '../../../components/PageLayout/PageLayout';

const { Container } = PageLayout;

const Guarantee = ({data}) => {
	const {
		title,
		text,
		preLinkText,
		linkText,
		team,
		img
	} = data;
	return (
		<section className='guarantee'>
			<Container>
				<div className='guarantee__inner'>
					<div className='guarantee__title'>{ title }</div>
					<div className='guarantee__text'>
						{ text }
					</div>
					<div className='guarantee__link-wrap'>
						{ preLinkText }
						<Link to={'#'} className='guarantee__link'>
							{ linkText }
						</Link>
					</div>
					<span className='guarantee__sign'>{ team }</span>
					<figure className='guarantee__badge'>
						<img className='guarantee__badge-img' src={ img } alt="guarantee-badge"/>
					</figure>
				</div>
			</Container>
		</section>
	)
}
export default Guarantee;

Guarantee.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		text: PropTypes.string,
		preLinkText: PropTypes.string,
		linkText: PropTypes.string,
		team: PropTypes.string,
		img: PropTypes.string,
	})
}