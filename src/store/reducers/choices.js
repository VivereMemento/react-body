const STORAGE_MEASURE = 'STORAGE::MEASUER';
const STORAGE_GENDER = 'STORAGE::GENDER';
const STORAGE_STEP = 'STORAGE::STEP';
const STORAGE_INIT = 'STORAGE::INIT';

export const choiceSwitchMeasure = (payload = {}) => ({ type: STORAGE_MEASURE, payload });
export const choiceSwitchGender = (payload = {}) => ({ type: STORAGE_GENDER, payload });
export const choiceSwitchSteps = (payload = {}) => ({ type: STORAGE_STEP, payload });
export const choiceInit = (payload = {}) => () => ({ type: STORAGE_INIT, payload });

const initialState = {
	measure: {metric: true, imperial: false},
};

const choices = (state = initialState, { type, payload }) => {
	return (
		type === STORAGE_INIT	? {...state, ...payload}
		: type === STORAGE_STEP ? {...state, steps: {...state.steps, ...payload}}
		: type === STORAGE_GENDER ? {...state, ...payload}
		: type === STORAGE_MEASURE ? {...state, measure: {...payload}}
								: state
	)
};
export const getChoicesState = state => state.choices;

export default choices;