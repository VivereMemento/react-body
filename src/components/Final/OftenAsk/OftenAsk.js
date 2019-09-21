import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './often-ask.scss';
import PageLayout from '../../PageLayout/PageLayout';
import { renderItems } from '../../helpers';

const { Container } = PageLayout;

const OftenAskItem = ({user, bodyfit, userImg, bodyfitImg}) => (
	<li className='often-ask__item'>
		<div className='often-ask__user'>
			<div className='often-ask__text'>{ user }</div>
			<figure className='often-ask__img-wrap'>
				<img className='often-ask__img' src={ userImg } alt="user"/>
			</figure>
		</div>
		<div className='often-ask__bodyfit'>
			<figure className='often-ask__img-wrap'>
				<img className='often-ask__img' src={ bodyfitImg } alt="user"/>
			</figure>
			<div className='often-ask__text often-ask__text_bg-green'>{ bodyfit }</div>
		</div>
	</li>
);

const OftenAsk = ({data}) => {
	const { title, userImg, bodyfitImg, items } = data;
	const [visibility, toggleVisibility] = useState(false);

	return (
		<section className='often-ask'>
			<h2 className='final__title'>{ title }</h2>
			<Container>
				<div className='often-ask__inner'>
					<div className='often-ask__list-wrap'>
						<ul className={
					classNames({
						'often-ask__list': true,
						'often-ask__list_full': visibility,
					})
				}>
							{ renderItems(items, OftenAskItem, {userImg, bodyfitImg}) }
						</ul>
						<button className={
					classNames({
						'often-ask__btn': true,
						'often-ask__btn_close': visibility,
					})
				} type='button' onClick={() => toggleVisibility(!visibility)}></button>
					</div>
				</div>
			</Container>
		</section>
	)
}
export default OftenAsk;

OftenAsk.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		userImg: PropTypes.string,
		bodyfitImg: PropTypes.string,
		items: PropTypes.array,
	})
};

OftenAskItem.propTypes = {
	user: PropTypes.string,
	bodyfit: PropTypes.string,
	userImg: PropTypes.string,
	bodyfitImg: PropTypes.string
}