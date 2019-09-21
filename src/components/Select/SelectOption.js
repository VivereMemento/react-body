import React from 'react';
import PropTypes from 'prop-types';

const SelectOption = ({value, handleOptionClick }) => {

	return (
		<li className='select__options-item' >
			<span 
				className='select__options-text'
				onClick={ () => {
					handleOptionClick(value);
				}}>
				{ value }
			</span>
		</li>
	)
};

export default SelectOption;

SelectOption.propTypes = {
	handleActivity: PropTypes.func,
}