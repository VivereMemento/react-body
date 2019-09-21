import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './choice-list.scss';
import { renderItems } from '../helpers';
import { useReduxState, useReduxAction } from '../../store/redux-hooks';
// import { getGenderState } from '../../store/reducers/gender';
import { getChoicesState, choiceSwitchSteps } from '../../store/reducers/choices';

const ChoiceItem = ({ choice: { id, title, value }, measure, stepType, pathTo}) => {
	const {gender, steps} = useReduxState(getChoicesState);
	const [chosenStep] = Object.keys(steps).filter(key => key === stepType);
	const switchChoice = useReduxAction(
		() => choiceSwitchSteps({[stepType]: {choiceId: id, choiceValue: value}}),
		[] // no deps
	);

	return (
		<li className={
				classNames({
					'choice-list__item': true,
					'choice-list__item_chosen': steps?.[chosenStep]?.choiceValue === value
				})
			}
			onClick={ switchChoice }>
			<Link className='choice-list__link' to={ `${pathTo}`}>
				<span 
					className='choice-list__text'
					>
					{ title }
					{measure ? <span className='choice-list__measure'>{ measure }</span> : null}
				</span>
			</Link>
		</li>
	)
}

const ChoiceList = ({quizeData, stepType, pathTo}) => {
	
	const {gender} = useReduxState(getChoicesState);

	return (
		<ul className='choice-list'>
			{renderItems(quizeData, ChoiceItem, {pathTo: `/${gender}${pathTo}`, stepType})}
		</ul>
	)
}
export default ChoiceList;

ChoiceList.propTypes = {
	quizeData: PropTypes.array,
	stepType: PropTypes.string,
	pathTo: PropTypes.string.isRequired,
};
ChoiceItem.propTypes = {
	choice: PropTypes.shape({
		title: PropTypes.string,
	}),
	stepType: PropTypes.string,
	pathTo: PropTypes.string.isRequired,
};