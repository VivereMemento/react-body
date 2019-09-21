import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useSpring, animated } from 'react-spring';
import './woman-finish.svg';
import './woman-finish-bg.svg';
import './step-finish.scss';
import { BASE_ROUTER_NAME } from '../../../constants';



const svgConfig = { duration: 5000 };
const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;

const PercentageWheel = ({ stroke, otherStroke }) => (
  <div className='percentage-wheel'>
	<svg viewBox='0 0 36 36' className='percentage-wheel__svg'>
		<path className='percentage-wheel__svg-circle-bg' d={circlePath} />
		<animated.path
			className='percentage-wheel__svg-circle'
			strokeDasharray={otherStroke}
			d={circlePath}
		/>
		<linearGradient id='percentageGradient'>
			<stop offset='5%' stopColor='#934399'></stop>
			<stop offset='95%' stopColor='#f4409a'></stop>
		</linearGradient>
		<animated.text x='18' y='20.35' className='percentage-wheel__svg-text'>
			{stroke}
		</animated.text>
    </svg>
  </div>
);

const StepFinish = () => {
	const [isRedirect, setIsRedirect] = useState(false);
	const { stroke, otherStroke } = useSpring({
		stroke: 100,
		otherStroke: '100, 100',
		from: {stroke: 0, otherStroke: '0,100'},
		config: svgConfig,
		onRest: (e) => {
			setTimeout(() => setIsRedirect(true), 1000);
		}
	});

	return (
		isRedirect
			? <Redirect to={`${ BASE_ROUTER_NAME }confirm-email`} />
			: <PercentageWheel
					stroke={stroke.interpolate(x => `${Math.round(x)}%`)}
					otherStroke={ otherStroke }
				/>
	)
}
export default StepFinish;