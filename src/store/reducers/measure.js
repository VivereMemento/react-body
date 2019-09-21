const MEASURE_SWITCH = 'MEASURE::SWITCH';
const MEASURE_INIT = 'MEASURE::INIT'
export const measureSwitch = (payload = {}) => ({ type: MEASURE_SWITCH, payload });
export const measureInit = (payload = {}) => ({ type: MEASURE_SWITCH, payload });

const initialState = {
	metric: true,
	imperial: false,
};

const measure = (state = initialState, { type, payload }) => (
	type === MEASURE_INIT  		? { ...state, ...payload }
	: type === MEASURE_SWITCH	? { ...state, ...payload }
								: state
);
export const getMeasureState = state => state.measure;

export default measure;