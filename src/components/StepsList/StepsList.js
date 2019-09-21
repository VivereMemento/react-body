import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';
import './steps.scss';
import StepItem from './StepsItem';
import MobileSteps from './StepsMobile';
import { renderItems } from '../helpers';
import { ANIMATION_DURATION } from '../../constants';
import { useReduxState } from '../../store/redux-hooks';
import { getAppState } from '../../store/reducers/app';
import { getLanguageState } from '../../store/reducers/language';
import { getChoicesState } from '../../store/reducers/choices';

function isMobileDevice() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const StepsList = props => {
	const [isMobile, setIsMobile] = useState(false);
	const { stepsMenu } = useReduxState(getLanguageState);
	const { gender, steps, measure } = useReduxState(getChoicesState);
	const countOfSteps = Array.isArray(stepsMenu) && stepsMenu.length;
	const [chosenItems, setChosenItems] = useState([]);
	const chosenSteps = 
		Object.keys(steps)
			.filter(choice => 
				steps[choice].hasOwnProperty('isFull')  ? steps[choice].isFull
				: Array.isArray(steps[choice])			? steps[choice].length
														: choice
			)
	const { percent } = useSpring({ 
		percent: chosenItems.length * 10,
		from: {
			percent: 0
		},
		config: { duration: ANIMATION_DURATION }
	});
	const {xyz} = useSpring({
		from: {
			xyz: [0, 100, 0]
		},
		xyz: [0, 0, 0],
		config: { duration: ANIMATION_DURATION - 300 }});

	
	useEffect(() => {
		setChosenItems(chosenSteps);
	}, [measure]);

	useEffect(() => {
		isMobileDevice() && setIsMobile(isMobile => !isMobile)
	},[]);

	return (
		<animated.div
		className="steps"
		style={{
			transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`)}}
		>
			<div className='steps__progress' style={{width: (100 / countOfSteps) * chosenItems.length + '%', zIndex: countOfSteps + 1, transition: '1s'}}>
				<animated.span className={
					classNames({
						'steps__progress-percent': true,
						'steps__progress-percent_full': countOfSteps === chosenItems.length
					})
				}>
					{ percent.interpolate(x => `${Math.round(x)}%`) }
				</animated.span>
				<div className='steps__progress-inner'></div>
			</div>
			<div className='steps__inner'>
				{
					isMobile
						?	<MobileSteps
								data={stepsMenu}
								countOfSteps={countOfSteps}
								chosenItems={chosenItems}
								activeGender={gender}
							/>
						: 	renderItems(stepsMenu, StepItem, { countOfSteps, chosenItems, gender })
				}
			</div>
			
		</animated.div>
	);
}
export default  StepsList;