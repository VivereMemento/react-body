import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StepsRoutes from './StepsRoutes';
import { BASE_ROUTER_NAME } from '../constants';
import Faq from '../pages/Faq/Faq';
import Final from '../pages/Final/Final';
import MealPlan from '../pages/MealPlan/MealPlan';
import ContactUs from '../pages/ContactUs/ContactUs';
import ThanksPage from '../pages/ThanksPage/ThanksPage';
import ConfirmEmail from '../pages/ConfirmEmail/ConfirmEmail';
import PaymentPage from '../pages/PaymentPage/PaymentPage';

const Routes = props => {

	return (
		<Switch>
			<Route path={`${ BASE_ROUTER_NAME }payment-via-paypal`} exact render={(props) => <PaymentPage {...props}/>} />
			<Route path={`${ BASE_ROUTER_NAME }payment-via-card`} exact render={(props) => <PaymentPage {...props}/>} />
			<Route path={`${ BASE_ROUTER_NAME }final`} exact render={(props) => <Final {...props}/>} />
			<Route path={`${ BASE_ROUTER_NAME }frequently-asked-questions`} exact render={(props) => <Faq {...props}/>} />
			<Route path={`${ BASE_ROUTER_NAME }meal-plan`} exact render={(props) => <MealPlan {...props}/>} />
			<Route path={`${ BASE_ROUTER_NAME }contact-us`} exact render={(props) => <ContactUs {...props}/>} />
			<Route path={`${ BASE_ROUTER_NAME }thanks-page-solid-gate`} exact render={(props) => <ThanksPage {...props}/>} />
			<Route path={`${ BASE_ROUTER_NAME }confirm-email`} exact render={(props) => <ConfirmEmail {...props}/>} />
			<StepsRoutes />
		</Switch>
	)
};

export default Routes;