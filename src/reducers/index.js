import counterReducer from './counter';
import isLoggedReducers from './isLogged';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducers
})

export default allReducers;