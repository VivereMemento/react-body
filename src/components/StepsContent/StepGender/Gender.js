import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import './gender.scss';
import { ANIMATION_DURATION } from '../../../constants';

const Genger = ({ srcBg, srcGender }) => {
	const {
		opacity,
		xyz,
		scale
	} = useSpring(
		{
			from: {
				opacity: 0,
				xyz: [-100, 0, 0],
				scale: 0
			},
			opacity: 1,
			xyz: [0, 0, 0],
			scale: 1,
			config: { 
				duration: ANIMATION_DURATION }
		}
	);
	return (
		<animated.div className="gender"
			style={{
				opacity: opacity.interpolate(opacity => opacity)}}
		>
			<animated.figure className="gender__bg-wrap"
				style={{
					transform: scale.interpolate(scale => `scale(${scale})`)}}
			>
				<img src={ srcBg } alt='gender-bg' className="gender__bg"/>
			</animated.figure>
			<animated.figure className="gender__img-wrap"
				style={{
					transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`)}}
			>
				<img src={ srcGender } alt='gender' className="gender__img"/>
			</animated.figure>
		</animated.div>
	)
}
Genger.propTypes = {
	srcBg: PropTypes.string.isRequired,
	srcGender: PropTypes.string.isRequired,
};
export default Genger;