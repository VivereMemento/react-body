import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './choice-meal.scss';
import { renderItems } from '../helpers';
import { useReduxState, useReduxAction } from '../../store/redux-hooks';
import { getChoicesState, choiceSwitchSteps } from '../../store/reducers/choices';
import { NextStepValidationContext } from '../StepsContent/StepsFrameWithState';
import { CONTINUE_VALID } from '../../constants';

const ChoiceMealItem = ({choice: {id, ingredientAlias}, icon, stepType}) => {
	const ingredientAliasId = `${ingredientAlias.id}`;
	const [isValid, setValid] = useState(false);
	const { steps } = useReduxState(getChoicesState);
	const [isChosen, setChoice] = useState(false);
	const [chosenItems, setChosenItems] = useState([])
	const includeChoice = useReduxAction(
		() => choiceSwitchSteps({[stepType]: [...chosenItems, {choiceId: id, choiceValue: ingredientAliasId}]}),
		[chosenItems] // chosenItems deps
	);
	const excludeChoice = useReduxAction(
		() => choiceSwitchSteps({[stepType]: chosenItems.filter(choice => choice.choiceValue !== ingredientAliasId)}),
		[chosenItems] // chosenItems deps
	);
	const btnValidationDispatch = useContext(NextStepValidationContext);

	useEffect(() => {
		steps[stepType] && setChosenItems(steps[stepType])
		setValid(() => steps[stepType] && !!steps[stepType].length)
	}, [steps]);

	useEffect(() => {
		btnValidationDispatch({type: CONTINUE_VALID, payload: isValid});
	}, [isValid]);

	return (
		<li 
			className={classNames({
				'choice-meal__item': true,
				'choice-meal__item_chosen': chosenItems.find(choice => choice.choiceValue === ingredientAliasId),
			})}
			onClick={() => {
				setChoice(() => !isChosen);
				chosenItems.find(choice => choice.choiceValue === ingredientAliasId) ? excludeChoice() : includeChoice();
			}}
		>
			<figure className='choice-meal__img-wrap'>
				<img src={ icon } alt={ ingredientAlias.name } className='choice-meal__img'/>
				<figcaption className='choice-meal__desc'>{ ingredientAlias.name }</figcaption>
			</figure>
		</li>
	)
};

const ChoiceMeal = ({quizeData, stepType}) => {
	const styles = {
		gridTemplateRows: new Array(Math.ceil(quizeData.length / 3)).fill('1fr').toString().split(',').join(' ')
	};

	return (
		<div className='choice-meal'>
			<ul className='choice-meal__list' style={styles} >
				{ renderItems(quizeData, ChoiceMealItem, {stepType}) }
			</ul>
		</div>
	);
}
export default ChoiceMeal;

ChoiceMeal.propTypes = {
	quizeData: PropTypes.array,
	setName: PropTypes.string,
};
ChoiceMealItem.propTypes = {
	choice: PropTypes.shape({
		ingredientAlias: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string
		})
	}),
	setName: PropTypes.string,
};