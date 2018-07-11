import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import foodsReducer from './foodsReducer';

const rootReducer = combineReducers({
	form: FormReducer,
	foods: foodsReducer,
});

export default rootReducer;
