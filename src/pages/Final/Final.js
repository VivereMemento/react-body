import React, {useRef, useState, useEffect} from 'react';
import './final.scss';
import FinalSticky from './FinalSticky/FinalSticky';
import FinalSummary from './FinalSummary';
import Chart from './Chart/Chart';
import Results from './Results/Results';
import LossEffect from './LossEffect/LossEffect';
import Benefits from './Benefits/Benefits';
import GettingPack from './GettingPack/GettingPack';
import GetStart from './GetStart/GetStart';
import OftenAsk from './OftenAsk/OftenAsk';
import Testimonial from './Testimonial/Testimonial';
import Payment from './Payment/Payment';
import Guarantee from './Guarantee/Guarantee';
import PaymentBy from './PaymentBy/PaymentBy';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { useLocalStorage, setHeaders } from '../../components/helpers';
import { BODYFIT_STEPS } from '../../constants';
import { api } from '../../store/api';
import { useReduxState } from '../../store/redux-hooks';
import { getAppState } from '../../store/reducers/app';
import { getChoicesState } from '../../store/reducers/choices';
import { getLanguageState } from '../../store/reducers/language';

const Final = props => {
	const {
		final: {
			sticky,
			summary,
			chart,
			results,
			lossEffect,
			benefits,
			gettingPack,
			getStart,
			oftenAsk,
			testimonial,
			payment,
			guarantee,
			paymentBy,
		}
	} = useReduxState(getLanguageState);
	const {
		productItems,
	} = useReduxState(getAppState);
	const {
		steps,
	} = useReduxState(getChoicesState);
	const [storedValue, setValue] = useLocalStorage(BODYFIT_STEPS, {});
	const [isStickyVisible, setIsStickyVisible] = useState(true);
	const finalData = storedValue.final;
	const filteredByValue = obj => Object.keys(obj).filter(key => Array.isArray(obj[key])).map(key => obj[key]).flat().map(o => Number(o.choiceValue));
	const ref = useRef();

	const [mealplanRequest, sendMealanRequest] = api.sendMealPlanRequest(setHeaders({
		Authorization: 'Bearer ' + storedValue.token,
	}));

	// useEffect(() => {
	// 	sendMealanRequest({
	// 		orderId: storedValue?.final?.orderId,
	// 		productItemId: productItems[0]?.id,
	// 		baseCalories: storedValue?.final?.caloriesPerDay,
	// 		targetWeight: 40,
	// 		currentWeight: 44,
	// 		measureUnit: 1,
	// 		ingredientAliasIds: filteredByValue(steps),
	// 	})
	// },[]);
	
	console.log(
		{
			orderId: storedValue?.final?.orderId,
			productItemId: productItems[0]?.id,
			baseCalories: storedValue?.final?.caloriesPerDay,
			targetWeight: 40,
			currentWeight: 44,
			measureUnit: 1,
			ingredientAliasIds: filteredByValue(steps),
		}
	)

	return (
		<div className='final'>
			<FinalSticky data={ sticky } payRef={ref} isStickyVisible={isStickyVisible} />
			<FinalSummary data={ summary } />
			<Chart dataChart={ chart } finalData={ finalData } />
			<Results data={ results } finalData={ finalData } />
			<LossEffect data={ lossEffect } />
			<Benefits data={ benefits } />
			<GettingPack data={ gettingPack } />
			<GetStart data={ getStart } />
			<OftenAsk data={ oftenAsk } />
			<Testimonial data={ testimonial } />
			<Payment data={ payment } payRef={ref} setIsStickyVisible={setIsStickyVisible} />
			<Guarantee data={ guarantee } />
			<PaymentBy data={ paymentBy } />
		</div>
	)
}
export default Final;