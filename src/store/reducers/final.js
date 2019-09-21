const FINAL_INIT = 'FINAL::INIT';

export const finalInit = (payload = {}) => () => {
	return ({ type: FINAL_INIT, payload })
};

const initialState = {};

const final = (state = initialState, { type, payload }) => {
	return type === FINAL_INIT ? { ...state, ...payload } : state
};

export const getAppState = state => state.final;

export default final;