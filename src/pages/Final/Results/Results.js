import React from 'react';
import PropTypes from 'prop-types';
import './results.scss';
import ResultsItem from './ResultsItem';
import PageLayout from '../../../components/PageLayout/PageLayout';
import { renderItems } from '../../../components/helpers';

const { Container } = PageLayout;

const Results = ({data, finalData}) => {
	const { 
		week: {
			days,
			weight,
			measure,
			sign,
			text,
		},
		info,
		warn: {
			title,
			items,
		}
	} = data;

	const resultsListStyles = {
		gridTemplateRows: new Array(Math.ceil(info.length / 3)).fill('1fr').toString().split(',').join(' ')
	};

	return (
		<section className='results'>
			<Container>
				<div className='results__inner'>
					<div className='results__top'>
						<div className='results__week'>
							{
								days
									.map((day, i) => 
										<span className='results__week-day' key={i}>{ day }</span>)
							}
						</div>
						<span className='results__weight'>{`${sign} ${weight} ${measure}`}</span>
						<span className='results__text'>{ text }</span>
					</div>
					<div className='results__middle'>
						<ul className='results__list' style={ resultsListStyles }>
							{
								renderItems(info, ResultsItem, {finalData})
							}
						</ul>
					</div>
					<div className='results__bottom'>
						<div className='results__warn-title'>
							{ title }
						</div>
						<ul className='results__warn-list'>
							{
								items.map((item, i) => <li className='results__warn-item' key={i}>{item}</li>)
							}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}
export default Results;

Results.propTypes = {
	data: PropTypes.shape({
		week: PropTypes.object,
		info: PropTypes.array,
		warn: PropTypes.object,
	})
}