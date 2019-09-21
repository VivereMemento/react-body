const APP_INIT = 'APP::INIT';

export const appInit = (payload = {}) => () => {
	return ({ type: APP_INIT, payload })
};

const initialState = {};

const app = (state = initialState, { type, payload }) => {
	return type === APP_INIT ? { ...state, ...payload } : state
};

export const getAppState = state => state.app;
export const getMealPlanState = state => state.app.mealPlan;

export default app;

