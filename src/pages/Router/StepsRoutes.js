import React from 'react';
import { Route } from 'react-router-dom';
import StepGender from '../../components/StepsContent/StepGender/StepGender';
import { BASE_ROUTER_NAME } from '../../constants';
import StepsFrameWithState from '../../components/StepsContent/StepsFrameWithState';
import { useReduxState } from '../../store/redux-hooks';
import { getAppState } from '../../store/reducers/app';

const StepsRoutes = props => {
	const {
		quizeSteps
	} = useReduxState(getAppState);

	return (
		quizeSteps.map((quize, i) => {
			return (
				i === 0 
					? <Route
						key={i}
						path={ BASE_ROUTER_NAME }
						exact
						render={(props) => <StepGender  data={quize} {...props}/>} />
					: <Route
						key={i}
						path={`${ BASE_ROUTER_NAME }:gender/step-${quize.position}`}
						exact
						render={(props) => <StepsFrameWithState data={quize} index={i} quizeLength={quizeSteps.length} {...props}/>} />
			)
		})
	)
};

export default StepsRoutes;