import { useState, useEffect, useReducer } from 'react';
import { curry } from 'ramda';
const fromJson = obj => obj.json();
const toJson = obj => JSON.stringify(obj);

const FETCH_INIT = 'FETCH::INIT';
const FETCH_SUCCESS = 'FETCH::SUCCESS';
const FETCH_FAILURE = 'FETCH::FAILURE';

const dataReducer = (state = null, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_INIT:
			return {
				...state,
				isLoading: true,
				isError: false
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				isError: false,
				data: payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true
			};
		default:
			return state;
	}
};
const useDataApi = (
	initialUrl,
	isImmediateLoading,
	initialData,
	initialParams={method: 'GET'}
) => {
	const [url, setUrl] = useState(initialUrl);
	const [params, setParams] = useState(initialParams)
	const [state, dispatch] = useReducer(dataReducer, {
	  isLoading: isImmediateLoading,
	  isSuccess: false,
	  isError: false,
	  data: initialData,
	});
  
	useEffect(() => {
		let didCancel = false;
	
		const fetchData = async () => {
			dispatch({ type: FETCH_INIT });
			
			try {
				await fetch(url, params)
					.then(res => {
						if (res.ok) {
							return fromJson(res);
						} else {
							throw res
						}
					})
					.then(res => {
						if (!didCancel) {
							dispatch({ type: FETCH_SUCCESS, payload: res });
						}
					});
			} catch (error) {
				if (!didCancel) {
					dispatch({ type: FETCH_FAILURE });
				}
			}
		};
		url && fetchData();
		return () => {
			didCancel = true;
		};
	}, [url]);
  
	return [state, setUrl, setParams];
};
const baseUrl = 'https://stage.bodyfitplan.xyz/api/v1.0';
const setUrl = curry((initialUrl, url) => initialUrl && url ? `${initialUrl}/${url}` : null);
const getDataFromJsonGenerator = curry((url, isImmediateLoading, initialData) => useDataApi(setUrl('http://www.json-generator.com/api/json/get', url), initialData));
const getData = curry((url, isImmediateLoading, initialData) => useDataApi(setUrl(baseUrl, url), initialData));
const postData = (url, isImmediateLoading) => (params = {}) => {
	const [posting, setUrl, setParams] = useDataApi(null, isImmediateLoading, {}, params);
	const activateSendData = data => {
		setParams({method: 'POST', ...params, body: toJson(data)});
		setUrl(`${baseUrl}/${url}`);
	};
	
	return [
		posting,
		activateSendData
	]
};
const isNotImmediateLoading = false;
const isImmediateLoading = true;
const getQuizeSteps = getData(null, isNotImmediateLoading);
const getEnumes = getData(null, isNotImmediateLoading);
const getProductItems = getData(null, isNotImmediateLoading);
const getMealPlan = getDataFromJsonGenerator('cpmqZxlEFu?indent=2', isImmediateLoading);
const getFinal = getDataFromJsonGenerator('cpSxklRXCa?indent=2', isImmediateLoading);
const sendQuizeChoices = postData('profile-summary', isNotImmediateLoading);
const sendAuthenticationRequest = postData('login_check', isImmediateLoading);
const sendMealPlanRequest = postData('meal-plan', isImmediateLoading);
const sendPaymentRequest = postData('payment/pay', isNotImmediateLoading);
const getImages = getData(null, isNotImmediateLoading);

export const api = {
	baseUrl,
	getQuizeSteps,
	getEnumes,
	getProductItems,
	getMealPlan,
	getFinal,
	sendQuizeChoices,
	sendAuthenticationRequest,
	sendMealPlanRequest,
	sendPaymentRequest,
	getImages
};

export default useDataApi;
