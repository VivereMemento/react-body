import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './meal-plan.scss';
import PageLayout from '../../components/PageLayout/PageLayout';
import Email from '../../components/Email/Email';
import MealPlanTable from './MealPlanTable/MealPlanTable';
import MealPlanList from './MealPlanList/MealPlanList';
import Recomendations from './Recomendations/Recomendations';
import Recipe from '../../components/Recipe/Recipe';
import Download from '../../components/Buttons/Download';
import Popup from '../../components/Popup/Popup';
import Select from '../../components/Select/Select';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { isObject } from '../../components/helpers';
import { useReduxState, useReduxAction } from '../../store/redux-hooks';
import { getLanguageState } from '../../store/reducers/language';
import { getMealPlanState } from '../../store/reducers/app';
import { appInit } from '../../store/reducers/app';
import { api } from '../../store/api';

const { Container } = PageLayout;

const MealPlan = props => {
	const {
		mealPlan: {
			heading,
			notification,
			downloads
		} 
	} = useReduxState(getLanguageState);
	const mealPlanData = useReduxState(getMealPlanState);

	const [mealPlanBack] = api.getMealPlan([]);
	
	useReduxAction(appInit({mealPlan: mealPlanBack.data, isGenerateId: true, isRewriteEatingType: true}),[mealPlanBack])();

	const [isEmailShown, setEmailShown] = useState(true);
	const [isPopupShow, setIsPopupShow] = useState(false);
	const [chosenMeal, setChosenMeal] = useState(null);
	const [chosenDay, setChosenDay] = useState(1);

	return (
		<div className='meal-plan'>
			<Container>
				<h1 className='heading heading_with-margin'>{ heading }</h1>
				<div className='meal-plan__notify'>
					<div className='meal-plan__notify-inner'>
						<span className='meal-plan__notify-title'>{ notification }</span>
						{
							isEmailShown
								&& <Email
									title='Enter email if you wish to resend the meal plan link'
									btnText='resend'
									mods={{bordered: false, bgWhite: true, smallerTitle: true, thinBorder: true, btnGreen: true, btnClose: true}}
									onCloseClick={val => setEmailShown(val)}
								/>
						}
					</div>
				</div>
				<div className='meal-plan__select'>
					<dir className='meal-plan__select-inner'>
						<Select id={1} title='Weeks' options={['Day 1','Day 2','Day 3','Day 4','Day 5', 'Day 6', 'Day 7']} />
					</dir>
				</div>
				{
					mealPlanBack.isLoading	? <Loading />
					: mealPlanBack.isError	? <Error />
											: <MealPlanTable 
													mealPlanData={mealPlanData}
													setIsPopupShow={setIsPopupShow}
													isPopupShow={isPopupShow}
													chosenMeal={chosenMeal}
													setChosenMeal={setChosenMeal}
												/>
				}
				<div className='meal-plan__downloads'>
					{downloads.map((text, index) => <Download key={index} text={text} />)}
				</div>
				<div className='meal-plan__table-mobile'>
					{
						mealPlanBack.isLoading	? <Loading />
						: mealPlanBack.isError	? <Error />
												: <MealPlanList 
														mealPlanData={mealPlanData}
														chosenMeal={chosenMeal}
														setChosenMeal={setChosenMeal}
													/>
					}
					
				</div>
				<Recomendations />
			</Container>
			<Popup setIsPopupShow={setIsPopupShow} isPopupShow={isPopupShow}>
				{chosenMeal && <Recipe chosenMeal={chosenMeal}/>}
			</Popup>
		</div>
	)
};

export default MealPlan;