import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useReduxAction } from '../../store/redux-hooks';
import { choiceSwitchSteps, choiceSwitchGender } from '../../store/reducers/choices';

const ChoiceGender = ({ data: {id, title, value}, children, pathTo, position }) => {

	const gender = title.toLowerCase();
	
	const switchChoiceStep = useReduxAction(
		() => choiceSwitchSteps({[`step-${position}`]: {choiceId: id, choiceValue: value}}),
		[] // deps: gender
	);
	const switchChoiceGender = useReduxAction(
		() => choiceSwitchGender({gender}),
		[] // deps: gender
	);

	const handleLinkClick = () => {
		switchChoiceStep();
		switchChoiceGender();
	}

	return (
		<Link 
			to={ `${gender}/${pathTo}`}
			onClick={ handleLinkClick }
			className={classNames({
				'choice__gender-btn': true,
				'choice__gender-btn--man': title === 'Man',
				'choice__gender-btn--woman': title === 'Woman'})
			}
		>
			{ children }
			<span className='choice__gender-btn-text'>{ title }</span>
		</Link>
	)
}
ChoiceGender.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		value: PropTypes.string
	}),
	pathTo: PropTypes.string,
	position: PropTypes.number
};
export default ChoiceGender;