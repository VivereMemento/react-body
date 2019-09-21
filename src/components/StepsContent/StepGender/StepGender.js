import React from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './step-gender.scss';
import './man.svg';
import './man-bg.svg';
import './woman.svg';
import './woman-bg.svg';
import WomanSvg from './woman-btn.inline.svg';
import ManSvg from './man-btn.inline.svg';
import Gender from './Gender';
import { ANIMATION_DURATION } from '../../../constants';
import ChoiceGender from '../../Choice/ChoiceGender';
import PageLayout from '../../PageLayout/PageLayout';
import { useReduxState, useReduxAction } from '../../../store/redux-hooks';
import { getLanguageState } from '../../../store/reducers/language';
import { genderInit } from '../../../store/reducers/gender';
import {renderItems} from '../../helpers';
const { Container } = PageLayout;

const StepGender = ({data, match: {isExact}}) => {
	const {opacity, xyz} = useSpring({from: {opacity: 0, xyz: [0, 100, 0]}, opacity: 1, xyz: [0, 0, 0], config: { duration: ANIMATION_DURATION }});
	const {
		id,
		title,
		quizStepChoices,
		question,
		position,
	} = data;
	const { steps: {'step-1': {man, woman}} } = useReduxState(getLanguageState);
	// const initDefaultGender = useReduxAction(genderInit);
	// isExact && initDefaultGender();

	return (
		<div className='step-gender'>
			<Container>
				<h1 className="heading">{ title }</h1>
				<div className='step-gender__inner'>
					<div className="step-gender__inner-left">
						<Gender srcBg={ man.imgBg } srcGender={ man.img }/>
					</div>
					<animated.div
						className="step-gender__inner-middle"
						style={{
							opacity: opacity.interpolate(opacity => opacity),
							transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
						}}>
							<h2 className="title">{ question }</h2>
							<div className="step-gender__btns">
								{
									quizStepChoices.map(({choice}, index) => (
										<ChoiceGender key={index} data={choice} pathTo={`step-${position + 1}`} position={position}>
											<ManSvg className='choice__gender-btn-svg'/>
										</ChoiceGender>
									))
								}
							</div>
							<div className='step-gender__agreement'>
								By continuing I agree with 
								<Link className='step-gender__agreement-link' to='/general-condition'>
									<span>Terms of Service, </span>
									<span>Privacy Policy, </span>
									<span>Money-Back Policy</span>
								</Link> 
								and the use of cookies.
							</div>
					</animated.div>
					<div className="step-gender__inner-right">
						<Gender srcBg={ woman.imgBg } srcGender={ woman.img }/>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default StepGender;