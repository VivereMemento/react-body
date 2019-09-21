import React, { useEffect } from 'react';
import { useReduxState } from '../../../store/redux-hooks';
import { getLanguageState } from '../../../store/reducers/language';
import './recipe.scss';
import mealImg from './meal-rec.png';
import flameImg from'./flame3.svg';
import timeImg from './time.svg';

const Recipe = ({chosenMeal}) => {

    const { 
		mealPlan: {
            popup: {
                min, cal, values, essential,taste, preparation
            }
        }
    } = useReduxState(getLanguageState);

    const {dishName, id, cookingTime, eatingType, essentialIngredients, toYourTasteIngredients, numberOfDay, fats, proteins, carbs, calories, preparations, image } = chosenMeal;

    return (
                <div className='recipe'>
                    <h2 className='recipe__title'>{dishName}</h2>
                    <div className='recipe__wrap'>
                        <img className='recipe__img' height='346' width='100%' src={image} alt=''></img>
                        <div className='recipe__inner-wrap'>
                            <div className='recipe__data'>
                                <div className='recipe__data-wrap'>
                                    <img className='recipe__data-img' src={timeImg} alt='clock'></img>
                                    <span className='recipe__data-text'>{cookingTime + ' ' + min}</span>
                                </div>
                                <div className='recipe__data-wrap'>
                                    <img className='recipe__data-img' src={flameImg} alt='flame'></img>
                                    <span className='recipe__data-text'>{calories + ' ' + cal}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='recipe__values'>
                        <span className='recipe__value'>{values[0]}
                            <span className='recipe__value_thin'>{' ' + proteins + ' ' + 'g'}</span>
                        </span>
                        <span className='recipe__value'>{values[1]}
                            <span className='recipe__value_thin'>{' ' + carbs + ' ' + 'g'}</span>
                        </span>
                        <span className='recipe__value'>{values[2]}
                            <span className='recipe__value_thin'>{' ' + fats + ' ' + 'g'}</span>
                        </span>
                    </div>
                    <div className='recipe__ingredients'>
                        <div className='recipe__ingredients-wrap'>
                            <span className='recipe__ingredients-title'>{essential}</span>
                            <ul className='recipe__ingredients-list'>
                                {essentialIngredients.map((item, index) =>
                                    <li key={index} className='recipe__ingredients-item'>
                                        <span>{item.ingredientName} - {item.mass}</span>
                                    </li>    
                                )}
                            </ul>
                        </div>
                        <div className='recipe__ingredients-wrap'>
                            <span className='recipe__ingredients-title recipe__ingredients-title_img'>{taste}</span>
                            <ul className='recipe__ingredients-list'>
                                {toYourTasteIngredients.map((item, index) =>
                                    <li key={index} className='recipe__ingredients-item'>
                                        <span>{item.ingredientName} - {item.mass}</span>
                                    </li>    
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='recipe__preparation'>
                        <span className='recipe__preparation-title'>{preparation}</span>
                        <ul className='recipe__preparation-list'>
                            {/* {temporary.preparation.map(item => */}
                                <li className='recipe__preparation-item'>{preparations}</li>    
                            {/* )} */}
                        </ul>
                    </div>
                </div>
    )
}

export default Recipe;