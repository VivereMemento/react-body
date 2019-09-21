import React from 'react';
import PropTypes from 'prop-types';
import './get-start.scss';
import { CheckGreen } from '../../SvgInline';
import PageLayout from '../../PageLayout/PageLayout';
import { useReduxState } from '../../../store/redux-hooks';
import { getChoicesState } from '../../../store/reducers/choices';

const { Container } = PageLayout;

const GetStart = ({data}) => {
	const {title, items} = data;
	const {gender} = useReduxState(getChoicesState);

	return (
		<section className='get-start'>
			<Container>
				<h2 className='final__title'>{ title }</h2>
				<ul className='get-start__list'>
					{
						Array.isArray(items[gender]) && items[gender].map((item, i) => (
							<li className='get-start__item' key={i}>
								<div className='get-start__item-svg'>
									<CheckGreen className='check-green' />
								</div>
								{ item }
							</li>
						))
					}
				</ul>
			</Container>
		</section>
	)
};

export default GetStart;

GetStart.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		items: PropTypes.object,
	})
}