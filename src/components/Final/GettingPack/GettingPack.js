import React from 'react';
import PropTypes from 'prop-types';
import './getting-pack.scss';
import PageLayout from '../../PageLayout/PageLayout';
import { renderItems } from '../../helpers';

const { Container } = PageLayout;

const GettingPackItem = ({imgSrc, title, subtitle, text, index}) => (
	<li className='getting-pack__item'>
		<figure className='getting-pack__img-wrap'>
			<img className='getting-pack__img' src={ imgSrc } alt="meal plan"/>
		</figure>
		<div className='getting-pack__content' data-index={index + 1}>
			<div className='getting-pack__title-wrap'>
				<div className='getting-pack__title'>
						{ title }
					
				</div>
				<span className='getting-pack__subtitle'>
						{ subtitle }
					</span>
			</div>
			<p className='getting-pack__text'>
				{ text }
			</p>
		</div>
	</li>
);

const GettingPack = ({data}) => {
	const { title, items } = data;
	return (
		<section className='getting-pack'>
			<h2 className='final__title final__title_uppercase'>
				{ title + ':'}
			</h2>
			<Container>
				<ul className='getting-pack__list'>
					{ renderItems(items, GettingPackItem) }
				</ul>
			</Container>
		</section>
	)
}

export default GettingPack;

GettingPack.propTypes = {
	data: PropTypes.object,
};
GettingPackItem.propTypes = {
	imgSrc: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	text: PropTypes.string,
	index: PropTypes.number,
};