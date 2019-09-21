import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import './images';
import './icons';
import './steps-content.scss';
import './choice.scss';
import HelpBtn from '../Buttons/HelpBtn';
import Gender from './StepGender/Gender';
import StepFinish from './StepFinish/StepFinish';
import  { ChoiceList, ChoiceSelect, ChoiceMeal, MeasurementUnits} from '../Choice';
import { ANIMATION_DURATION, CONTINUE_VALID, BODYFIT_STEPS } from '../../constants';
import { useLocalStorage } from '../../components/helpers';
import ContinueBtn from '../../components/Buttons/ContinueBtn';
import { useReduxState } from '../../store/redux-hooks';
import { getAppState } from '../../store/reducers/app';
import { getChoicesState } from '../../store/reducers/choices';
import { getLanguageState } from '../../store/reducers/language';
import PageLayout from '../../components/PageLayout/PageLayout';

const { Container } = PageLayout;

export const NextStepValidationContext = React.createContext(null);
const continueReducer = (state, {type, payload}) =>  type === CONTINUE_VALID ? payload : state;

const StepsFrameWithState = ( {data, index, quizeLength,  match: {params, path} }) => {
	const [storedValue, setValue] = useLocalStorage(BODYFIT_STEPS, {});
	const [isContinue, validationDispatch] = useReducer(continueReducer, false);
	const chosenSteps = useReduxState(getChoicesState);
	const { measure } = chosenSteps;
	const activeGender = chosenSteps.gender;
	const [activeMeasure] = Object.keys(measure).filter(key => measure[key] && key);
	const {
		title,
		question,
		position,
		isAutoSubmit,
		quizStepChoices,
		isWithMeasurementUnits,
	} = data;
	const {
		enums: {
			measureUnits,
		},
	} = useReduxState(getAppState);
	const quizeMeasure = measureUnits.find(obj => obj.label === activeMeasure.toUpperCase());
	const sortedChoicesByQuizeMeasure = quizStepChoices.filter(({choice: {measurementUnit}}) => measurementUnit === quizeMeasure.value || measurementUnit === null);
	const {
		steps: {
			help,
			[`step-${position}`]: {
				gender,
			}
		}
	} = useReduxState(getLanguageState);

	const {opacity, xyz} = useSpring({
		from: {
			opacity: 0,
			xyz: [0, 100, 0]
		},
		opacity: 1,
		xyz: [0, 0, 0],
		config: { duration: ANIMATION_DURATION }
	});

	useEffect(() => {
		setValue({...storedValue, ...chosenSteps});
	}, [chosenSteps]);

	return (
		<div className='steps-content'>
			<HelpBtn text={`${position} ${help}`}/>
			<Container>
				<div className='steps-content__frame'>
					<div className='steps-content__frame-inner'>
						<div className='steps-content__frame-left'>
							<h1 className='heading'>{ title }</h1>
							<Gender srcBg={ gender[activeGender].imgBg } srcGender={ gender[activeGender].img }/>
						</div>
						<div className='steps-content__frame-right'>
							<animated.div className='choice'
								style={{
									opacity: opacity.interpolate(opacity => opacity),
									transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`)
								}}
							>
								<h2 className='title'>{ question }</h2>
								<div className="choice__options">
									{ isWithMeasurementUnits && <MeasurementUnits /> }
									{
										isAutoSubmit && index !== quizeLength - 1
											&& <ChoiceList 
													stepType={ path.split('/')[2] }
													quizeData={ sortedChoicesByQuizeMeasure }
													pathTo={ `/step-${position + 1}` }
												/>		
									}
									{
										!isAutoSubmit && isWithMeasurementUnits
											&& <NextStepValidationContext.Provider value={validationDispatch}>
													<ChoiceSelect
														stepType={ path.split('/')[2] }
														quizeData={ sortedChoicesByQuizeMeasure }
													/>
												</NextStepValidationContext.Provider>
									}
									{
										!isAutoSubmit && !isWithMeasurementUnits
											&& <NextStepValidationContext.Provider value={validationDispatch}>
													<ChoiceMeal
														stepType={ path.split('/')[2] }
														quizeData={ quizStepChoices }
													/>
												</NextStepValidationContext.Provider>
									}
									{
										!isAutoSubmit
											&& <ContinueBtn
													isContinue={ isContinue }
													pathTo={ `${activeGender}/step-${position + 1}` }
													text = 'continue'
													mods = {{arrow: true}}
												/>
									}
									{
										index === quizeLength - 1 && <StepFinish gender={ params.gender }/>
									}
								</div>
							</animated.div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
};

export default StepsFrameWithState;

StepsFrameWithState.propTypes = {
	data: PropTypes.object
};