import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './select.scss';
import SelectOption from './SelectOption';
import { useClickOutsideOfComponent } from '../helpers';

const Select = ({id, title, options, storeChoice, handleStoreChoice}) => {
	const [option, setOption] = useState(storeChoice?.[title]?.choiceValue || title);
	const [isActive, setIsActive] = useState(false);
	const [activeId, setIsActiveId] = useState(null);

	const hideSelectList = () => {
		isActive && setIsActive(false);
	};
	
	const handleActivity = (id) => {
		activeId === id ? setIsActive(!isActive) : setIsActive(true);
		setIsActiveId(id);
	};

	const handleOptionClick = value => setOption(value);
	
	useEffect(() => {
		option !== title && handleStoreChoice && handleStoreChoice(id, title, option);
	}, [option]);

	useEffect(() => {
		setOption(storeChoice?.[title]?.choiceValue || title);
	},[storeChoice]);

	useClickOutsideOfComponent(hideSelectList);
	
	return (
		<div className='select'>
			<div
				className={
					classNames({
						'select__item': true,
						'select__item_half': id === 'ft' || id === 'inch',
						'select__item_active': isActive && activeId === id,
					})
				}
				onClick={ () => handleActivity(id) }>
				<span className='select__text'>
					{
						title !== option ? `${title} - ${option}` : title
					}
				</span>
				<ul className='select__options'>
					{ 
						options.map((value, index) => 
							<SelectOption
								key={index}
								value={value}
								handleOptionClick={ handleOptionClick }
							/>
						)
					}
				</ul>
			</div>	
		</div>
	)
}
export default Select;

Select.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	options: PropTypes.array,
	handleStoreChoice: PropTypes.func,
	storeChoice: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
	])
}