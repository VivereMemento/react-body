import React from 'react';
import { curry } from 'ramda';
import classNames from 'classnames';
import { addHover } from '../../../components/helpers';

const MealPlanCell = ({arrRow, arrRowIdx, weekMeal, setWeekMeal, handleOnCellClick}) => {

	const handleMouseEnter = ({currentTarget}) => addHover(weekMeal, Number(currentTarget.id), true, setWeekMeal);
	const handleMouseLeave = ({currentTarget}) => addHover(weekMeal, Number(currentTarget.id), false, setWeekMeal);
	
	return (
		arrRow.length > 1 
			?	arrRow.map((obj, objIdx) => (
					<div 
						key={obj.id ? obj.id : obj + Math.random()*100}
						id={obj.id ? obj.id : ''}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						onClick={handleOnCellClick}
						className={
							classNames({
								'meal-plan__cell': obj.type === 'cell',
								'meal-plan__cell_hover': obj.hover,
								'meal-plan__cell-row-head': obj.type === 'row-head',
								'meal-plan__cell-column-head': obj.type === 'column-head',
								'meal-plan__cell-head-pseudo': arrRowIdx === 0 && objIdx === 3 || arrRowIdx === 0 && objIdx === 6,
								'meal-plan__cell-head-pseudo_lunch': arrRowIdx === 0 && objIdx === 3,
								'meal-plan__cell-head-pseudo_dinner': arrRowIdx === 0 && objIdx === 6,
							})
						}
					>
						<span className={
							classNames({
									'meal-plan__cell-text': obj.type === 'cell',
									'meal-plan__cell-title': obj.type !== 'cell',
								})
							}
						>
							{obj.type === 'cell' ? obj.dishName : obj.value}
						</span>
						{ arrRowIdx !== 0 && objIdx !== 0 &&
							<img className='meal-plan__img' src={obj.image}/>
						}
					</div>
				))
			:	[]
	)
};

export default MealPlanCell;