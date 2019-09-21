import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import './choice-select.scss';
import Select from '../../Select/Select';
import { useReduxState, useReduxAction } from '../../../store/redux-hooks';
import { getChoicesState, choiceSwitchSteps } from '../../../store/reducers/choices';
import { NextStepValidationContext } from '../../StepsContent/StepsFrameWithState';
import { CONTINUE_VALID } from '../../../constants';

const checkIsAllSelected = (selectedItems = {}, items, setter) => {
	Object.keys(selectedItems).length === items.length
		? setter(true)
		: setter(false)
};

const ChoiceSelect = ({ quizeData, stepType }) => {
	const {measure, steps} = useReduxState(getChoicesState);
	const [activeMeasure, setActiveMeasure] = useState('');
	const [isAllSelected, setAllSelected] = useState(false);
	const switchChoice = useReduxAction(choiceSwitchSteps,[]);
	const selectOfStep = steps?.[stepType]?.[activeMeasure];
	const btnValidationDispatch = useContext(NextStepValidationContext);

	const handleStoreChoice = (id, title, option) => {
		switchChoice({
			[stepType]: {
				...steps[stepType],
				[activeMeasure]: {
					...steps[stepType][activeMeasure],
					[title]: {
						choiceId: id,
						choiceValue: `${option}`,
					}
				}
			}
		})
	}

	useEffect(() => setActiveMeasure(Object.keys(measure).find(key => measure[key])), [measure])

	useEffect(() => {
		checkIsAllSelected(selectOfStep, quizeData, setAllSelected);
	},[activeMeasure, selectOfStep]);

	useEffect(() => {
		btnValidationDispatch({type: CONTINUE_VALID, payload: isAllSelected});
		switchChoice({
			[stepType]: {
				...steps[stepType],
				isFull: isAllSelected,
			}
		});
	}, [isAllSelected]);

	return (
		<div className='choice-select'>
			{
				quizeData.map((quize, i) => {
					const { choice: {  id, title, rangeEnd, rangeStart}} = quize;
					const selectOptions = new Array(rangeEnd - rangeStart).fill(rangeStart).map((num, i) => num + i);

					return (
						<Select 
							key={i}
							id={id}
							title={title}
							options={selectOptions}
							storeChoice={selectOfStep}
							handleStoreChoice={handleStoreChoice} 
						/>
					)
				})
			}
		</div>
	)
}

export default ChoiceSelect;

ChoiceSelect.propTypes = {
	data: PropTypes.array,
	stepType: PropTypes.string,
};