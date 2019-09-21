import React from 'react';
import classNames from 'classnames';
import './measurement-units.scss';
import { useReduxState, useReduxAction } from '../../store/redux-hooks';
import { getChoicesState, choiceSwitchMeasure } from '../../store/reducers/choices';

const MeasurementUnits = props => {
	const { measure } = useReduxState(getChoicesState);
	const measureSwitcherMetric = useReduxAction(
		() => choiceSwitchMeasure({ metric: true, imperial: false }),
		[measure]
	);
	const measureSwitcherImperial = useReduxAction(
		() => choiceSwitchMeasure({ metric: false, imperial: true }),
		[measure]
	);
	
	return (
		<div className='measurement-units'>
			<button
				className={classNames({
					'measurement-units__btn': true,
					'measurement-units__btn_left': true,
					'active': measure.imperial
				})}
				onClick={measureSwitcherImperial}
			>
				Imperial
			</button>
			<button
				className={classNames({
					'measurement-units__btn': true,
					'measurement-units__btn_right': true,
					'active': measure.metric
				})}
				onClick={measureSwitcherMetric}
			>
				Metric
			</button>
		</div>
	)
};

export default MeasurementUnits;
