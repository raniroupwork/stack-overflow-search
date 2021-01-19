/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import SOFReducer from './sof/reducer.js';
import historyReducer from './history/reducer.js';

// all the reducers are in one place
const rootReducers = combineReducers({
    SOFReducer: SOFReducer,
    historyReducer: historyReducer,
});

export default rootReducers;
