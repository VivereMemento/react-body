const MEAL_PLAN_INIT = 'MEAL_PLAN::INIT';

export const mealPlanInit = (payload = {}) => () => {
	return ({ type: MEAL_PLAN_INIT, payload })
};

const initialState = {};

const mealPlanReducer = (state = initialState, { type, payload }) => {
	return type === MEAL_PLAN_INIT ? { ...state, ...payload } : state
};

export const getMealPlanState = state => state.mealPlan;

export default mealPlanReducer;