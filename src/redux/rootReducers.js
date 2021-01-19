/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import SOFReducer from './sof/reducer.js';
import historyReducer from './history/reducer.js';
import authReducer from './auth/reducer.js';

// all the reducers are in one place
const rootReducers = combineReducers({
    SOFReducer: SOFReducer,
    historyReducer: historyReducer,
    authReducer: authReducer,
});

export default rootReducers;
