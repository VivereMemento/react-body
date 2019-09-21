import React, { useState } from 'react';
import classNames from 'classnames';


const ResultsItem = ({title, img, text, measure, textInfo, id, index, finalData}) => {
	const [isInfoVisible, setVisiblity] = useState(false);
	const {achievableProgress, bmi, bmiLabel, waterAmount, caloriesPerDay, metabolicAge, orderId, userId} = finalData;
	
	return (
		<li className='results__item'>
			<div className='results__item-top'>
				<span className='results__item-title'>{title}</span>
				<span 
					className={
						classNames({
							'results__item-btn': true,
							'results__item-btn_active': isInfoVisible,
						})
					}
					onClick={ () => setVisiblity(!isInfoVisible)}
				>
					 { isInfoVisible ? '+' : '?'}
				</span>
			</div>
			<div className='results__item-middle'>
				<img src={img} />
			</div>
			<div className='results__item-bottom'>
				<span className='results__item-info'>{text}
					{(() => {
						switch(title) {
							case 'Bmi': return <span>{bmiLabel}</span>; break;
							case 'Water balance': return <span>{waterAmount}</span>; break;
							case 'Metabolic age': return <span>{metabolicAge}</span>; break;
							case 'Calories': return <span>{caloriesPerDay}</span>; break;
					} 
					})()
					}
					<span>{measure}</span>
				</span>
			</div>
			<div 
				className={
					classNames({
						'results__info': true,
						'results__info_active': isInfoVisible,
					})
				}
			>
				<span className='results__info-text'>{textInfo}</span>
			</div>
		</li>
	)
};

export default ResultsItem;