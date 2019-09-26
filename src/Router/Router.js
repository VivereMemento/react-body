import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { BASE_ROUTER_NAME, BODYFIT_STEPS } from '../constants';
import { useLocalStorage, isTimePassed, setHeaders } from '../components/helpers';
import PageLayout from '../components/PageLayout/PageLayout';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import FooterContent from '../components/FooterContent/FooterContent';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { appInit } from '../store/reducers/app';
import { choiceInit } from '../store/reducers/choices';
import { languageInit } from '../store/reducers/language';
import { useReduxAction } from '../store/redux-hooks';
import { api, useDataApi } from '../store/api';

import data from '../store/data';
const ONE_HOUR = 3600000;
const isOneHourPassed = isTimePassed(ONE_HOUR);

const Router = () => {
	const [storedValue, setValue] = useLocalStorage(BODYFIT_STEPS, {});
	const [authRequest, activateAuthRequest] = api.sendAuthenticationRequest(setHeaders());
	const [quizeSteps, setUrlForQuizeSteps, setParamsForQuizeSteps] = api.getQuizeSteps({});
	const [images, setUrlForImages, setParamsForImages] = api.getImages({});
	const [enums, setUrlForEnumes, setParamsForEnumes] = api.getEnumes([]);
	const [productItems, setUrlForProductItems, setParamsForProductItems] = api.getProductItems([]);

	const isError = [
		authRequest.isError,
		quizeSteps.isError,
		enums.isError,
		productItems.isError,
		images.isError,
	].find(error => error);
	const isLoading = [
		quizeSteps.isLoading,
		enums.isLoading,
		productItems.isLoading,
		images.isLoading
	].find(isLoading => isLoading);

	useReduxAction(appInit({
		quizeSteps: quizeSteps.data,
		enums: enums.data,
		productItems: productItems.data,
		images: images.data,
	}),[quizeSteps, enums, productItems, images])();
	useReduxAction(choiceInit(storedValue),[])();
	useReduxAction(languageInit(data),[])();
	
	useEffect(() => {
		if (!storedValue.token || isOneHourPassed(storedValue.tokenDate)) {
			activateAuthRequest({
				'passwordName': 'ttt',
				'password': 'ttt'
			});
		}
	},[]);

	useEffect(() => {
		if (authRequest.data.token) {
			setValue({...storedValue, tokenDate: Date.now(), token: authRequest.data.token});
		}

		if (authRequest.data.token || storedValue.token && !isOneHourPassed(storedValue.tokenDate)) {
			const token = authRequest.data.token || storedValue.token;
			const params = {'Authorization': 'Bearer ' + token};

			setParamsForQuizeSteps(setHeaders(params));
			setParamsForEnumes(setHeaders(params));
			setParamsForProductItems(setHeaders(params));
			setParamsForImages(setHeaders(params));
			setUrlForQuizeSteps(`${api.baseUrl}/quiz-steps`);
			setUrlForEnumes(`${api.baseUrl}/enums`);
			setUrlForProductItems(`${api.baseUrl}/product-items`);
			setUrlForImages(`${api.baseUrl}/images?page=1`);
		}
		
	}, [authRequest.data]);

	return (
		<BrowserRouter basename={BASE_ROUTER_NAME}>
			<PageLayout 
				header={
					isError			? null
					: isLoading	? null
											: <HeaderContent />
				}
				main={
					isError 		? <Error />
					: isLoading	? <Loading />
											: <Routes />
				}
				footer={
					isError			? null
					: isLoading	? null
											: <FooterContent />
				}
			/>
		</BrowserRouter>
	)
};

export default Router;