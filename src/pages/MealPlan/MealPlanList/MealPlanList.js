import React, { useState } from 'react';
import ClassNames from 'classnames';


import MealPlanItem from './MealPlanItem';

const findMeal = (data, target) => data.find(obj => obj.id === Number(target.id));
const MealPlanList = ({mealPlanData, chosenMeal, setChosenMeal}) => {
	const oneDayMenu = mealPlanData.slice(0, 7);

    return (
        <ul className="meal-plan__list">
			{
				oneDayMenu.map((item, index) => (
					<MealPlanItem
						key={index}
						data={item}
						chosenMeal={chosenMeal}
						handleSetChosenMeal={(currentTarget) => setChosenMeal(findMeal(mealPlanData, currentTarget))}
					/>
				))
			}
        </ul>
    )
}

export default MealPlanList;