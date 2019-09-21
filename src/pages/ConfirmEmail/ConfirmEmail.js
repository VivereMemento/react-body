import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import './confirm-email.scss';
import Email from '../../components/Email/Email';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { useLocalStorage, isObject, setHeaders } from '../../components/helpers';
import { api } from '../../store/api';
import { BASE_ROUTER_NAME, BODYFIT_STEPS } from '../../constants';
import { useReduxState, useReduxAction } from '../../store/redux-hooks';
import { getAppState } from '../../store/reducers/app';
import { getChoicesState } from '../../store/reducers/choices';
import { finalInit } from '../../store/reducers/final';
const getEnumsValue = (enums, step) => enums.find(obj => obj.label === step)
const ConfirmEmail = props => {
	const [storedValue, setValue] = useLocalStorage(BODYFIT_STEPS, null);
	const {
		enums: {
			measureUnits,
			quizStepChoiceTypes,
		},
		gender
	} = useReduxState(getAppState);
	const choicesData = useReduxState(getChoicesState);
	const [posting, sendQuizeChoices] = api.sendQuizeChoices(setHeaders({'Authorization': 'Bearer ' + storedValue.token}));
	const orderId = storedValue?.final?.orderId;
	const normalizedChoicesData = {
		choices: [
			...Object.keys(choicesData.steps).reduce((acc, key) => {
				return (
					isObject(choicesData.steps[key])			? choicesData.steps[key].metric ? [...acc, ...Object.keys(choicesData.steps[key].metric).map(k => choicesData.steps[key].metric[k])] : [...acc, choicesData.steps[key]]
					: Array.isArray(choicesData.steps[key])		? [...acc, ...choicesData.steps[key]]
																: acc
				)
			},[])
		],
		genderChoiceType: getEnumsValue(quizStepChoiceTypes, choicesData.gender.toUpperCase()).value,
		measureUnit: getEnumsValue(measureUnits, Object.keys(choicesData.measure).filter(key => choicesData.measure[key] && key)[0].toUpperCase()).value,
	};

	const handleOnSubmit = email => {
		orderId
			? sendQuizeChoices({
					...normalizedChoicesData,
					email,
					orderId
				})
			: sendQuizeChoices({
				...normalizedChoicesData,
				email
			})
	};
	useReduxAction(finalInit(posting.data),[posting.data])();
	useEffect(() => {
		!storedValue?.final?.orederId && setValue(state => ({...state, final: posting.data}));
	}, [posting.isSuccess]);

	return (
		<div className='confirm-email'>
			<div className='confirm-email__inner'>
				{
					posting.isLoading	? <Loading />
					: posting.isError	? <Error />
					: posting.isSuccess	? <Redirect to={`${ BASE_ROUTER_NAME }final`} />
										: <Email
												title='Please enter your email address to get your body profile results:'
												btnText='confirm'
												handleOnSubmit={handleOnSubmit}
												mods={{}}
											/>
				}
			</div>
		</div>
	)
};

export default ConfirmEmail;