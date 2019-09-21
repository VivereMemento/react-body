const GENDER_INIT = 'GENDER::INIT';
const GENDER_SWITCH = 'GENDER::SWITCH';

export const genderSwitch = (payload = {}) => ({ type: GENDER_SWITCH, payload });
export const genderInit = (payload = {}) => ({ type: GENDER_INIT, payload });

const initialState = {
	man: false,
	woman: false,
};

const gender = (state = initialState, { type, payload }) => (
	type === GENDER_INIT 	 ? { ...state, ...initialState }
	: type === GENDER_SWITCH ? { ...state, ...payload }
							 : state
);
export const getGenderState = state => state.gender;

export default gender;