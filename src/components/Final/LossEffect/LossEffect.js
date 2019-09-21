import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './loss-effect.scss';
import { CheckGreen } from '../../SvgInline';
import PageLayout from '../../PageLayout/PageLayout';
import { renderItems } from '../../helpers';

const { Container } = PageLayout;

const LossEffectItem = ({imgSrc, text, reasonsList}) => (
	<div className={
		classNames({
			'loss-effect__item': true,
			'loss-effect__item_without-bg': reasonsList,
		})
	}>
		<Container>
			<div className={
				classNames({
					'loss-effect__content': true,
					'loss-effect__content_with-bg': reasonsList,
				})
			}>
				<div className='loss-effect__item-part'>
					{
						imgSrc
							? (
								<figure className='loss-effect__img-wrap'>
									<img className='loss-effect__img' src={ imgSrc } alt='1'/>
								</figure>
							  )
							: (
								<div className='loss-effect__item-text' dangerouslySetInnerHTML={{ __html: text }}></div>
							  )
					}
				</div>
				<div className='loss-effect__item-part'>
					{
						reasonsList
							? (
								Array.isArray(reasonsList) && reasonsList.map((item, i) => (
									<li className='loss-effect__list-item' key={i}>
										<div className='loss-effect__list-item-svg'>
											<CheckGreen className='check-green' />
										</div>
										{ item }
									</li>
								))
							  )
							: (
								<div className='loss-effect__item-text' dangerouslySetInnerHTML={{ __html: text }}></div>
							  )
					}
					
				</div>
			</div>
		</Container>
	</div>
);

const LossEffect = ({ data }) => {
	const { title, items } = data;
	return (
		<section className='loss-effect'>
			<h2 className='final__title'>{ title }</h2>
			{
				renderItems(items, LossEffectItem)
			}
		</section>
	)
}
export default LossEffect;

LossEffect.propTypes = {
	data: PropTypes.object,
}
LossEffectItem.propTypes = {
	imgSrc: PropTypes.string,
	text: PropTypes.string,
	reasonsList: PropTypes.array,
}