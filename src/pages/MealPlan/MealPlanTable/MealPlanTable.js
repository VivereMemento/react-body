import React, { useState, useEffect } from 'react';
import { compose } from 'ramda';
import classNames from 'classnames';
import MealPlanCell from './MealPlanCell';
import { createTableData } from '../../../components/helpers';
const rowTitle = ['Day 1','Day 2','Day 3','Day 4','Day 5', 'Day 6', 'Day 7'];
const columnsTitle = ['','Breakfast','1st snack','Main Dish', 'Side Dish', '2nd snack','Main Dish','Side Dish'];
const createTable = createTableData(columnsTitle, rowTitle);
const findMeal = (data, target) => data.find(obj => obj.id === Number(target.id));

const MealPlanList = ({mealPlanData, isPopupShow, setIsPopupShow, setChosenMeal}) => {
	const [weekMeal, setWeekMeal] = useState([]);
	const mealPlanListStyles = {
		gridTemplateColumns: new Array(columnsTitle.length).fill('1fr').toString().split(',').join(' ')
	};
	const handleOnCellClick = ({target}) => {
		setIsPopupShow(true);
		setChosenMeal(findMeal(mealPlanData, target));
	};

	useEffect(() => {
		compose(
			setWeekMeal,
			createTable
		)(mealPlanData);
	},[mealPlanData]);
	
	return (
		<div className='meal-plan__table' style={mealPlanListStyles}>
			{
				weekMeal.map((arrRow, arrRowIdx) => (
					<MealPlanCell 
						key={arrRowIdx}
						arrRow={arrRow} 
						arrRowIdx={arrRowIdx} 
						weekMeal={weekMeal}
						setWeekMeal={setWeekMeal}
						handleOnCellClick={handleOnCellClick}
					/>
				))
			}
		</div>
	)
};

export default MealPlanList;