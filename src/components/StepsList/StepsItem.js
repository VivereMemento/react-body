import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './icons';
import { BASE_ROUTER_NAME } from '../../constants';

const StepItem = ({id, index, name, icon, countOfSteps, path, gender, chosenItems }) => {

	const styles = {
		width: `${100 / countOfSteps}%`,
		zIndex:`${countOfSteps - index}`
	};

	return (
		<NavLink 
			to={path === BASE_ROUTER_NAME ? `${path}` : `/${gender}/step-${index + 1}`}
			exact
			activeClassName='steps__link_active'
			className={classNames({
				'steps__link': true,
				'steps__link_chosen': chosenItems.includes(`step-${index + 1}`)
				})
			}
			style={ styles }>
				<div className ='steps__link-inner'>
					<figure className='steps__img-wrap'>
						<img src={ icon } alt={ name } className='steps__img'/>
					</figure>
					<span className='steps__text'>{ name }</span>
				</div>
		</NavLink>
	)
};
StepItem.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};
export default StepItem;