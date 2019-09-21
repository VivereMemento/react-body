import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './info.scss';
import { renderItems } from '../helpers';
import PageLayout from '../../components/PageLayout/PageLayout';

const { Container } = PageLayout;
const InfoItem = ({title, text, mods: {colors, arrow} }) => {
	const [activity, setActivity] = useState(false);

	return (
		<li className={
			classNames({
				'info__item': true,
				'info__item_active': activity,
			})}
			onClick={() => setActivity(!activity)}>
			<div className="info__item-title-wrap">
				<span className={
					classNames({
						'info__item-title': true,
						'info__item-title_color-bold-pink': colors && colors.boldPink,
					})
				}>{title}</span>
				<span
					className={
						classNames({
							'info__item-btn': true,
							'info__item-btn_with-arrow': arrow,
						})
					}>
				</span>
			</div>
			<div className="info__item-text">{ text }</div>
		</li>
	)
};
export const InfoList = ({ items, mods={} }) => (
	<ul className='info__list'>
		{ renderItems(items, InfoItem, {mods}) }
	</ul>
);

const InfoFrame = ({ heading, children }) => (
	<div className='info'>
		<Container>
			<div className='info__inner'>
				{ children }
			</div>
		</Container>
	</div>
);

export default InfoFrame;

InfoList.propTypes = {
	items: PropTypes.array
};
InfoItem.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	mods: PropTypes.object,
};

