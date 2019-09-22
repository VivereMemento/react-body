import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import app from './reducers/app';
import language from './reducers/language';
import gender from './reducers/gender';
import choices from './reducers/choices';
import final from './reducers/final';
import mealPlanReducer from './reducers/mealPlan';

const store = createStore(
    combineReducers({
        app,
        language,
        // gender,
        choices,
        final,
        // mealPlanReducer
    }),
    composeWithDevTools(applyMiddleware())
);

export default store;