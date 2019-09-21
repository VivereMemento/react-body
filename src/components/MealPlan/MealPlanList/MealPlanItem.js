import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';
import ClassNames from 'classnames';

const MealPlanItem = ({ data, chosenMeal,handleSetChosenMeal}) => {
    const [isRecipeShown, setIsResipeShown] = useState(false);

    const handlerClick = ({currentTarget}) => {
        handleSetChosenMeal(currentTarget)
        setIsResipeShown(!isRecipeShown);
    };
    
    return (
        <li className="meal-plan__item" key={data.id} id={data.id} onClick={handlerClick}>
            <div className="meal-plan__item-inner">
                <img className="meal-plan__item-img" src={data.image} alt="meal"/>
                <div>
                <span className="meal-plan__item-time">{data.eatingType}</span>
                <span className="meal-plan__item-name">{data.dishName}</span>
            </div>
            </div>
            
            { isRecipeShown && <Recipe chosenMeal={chosenMeal}/>}
        </li>
    )
}

export default MealPlanItem;