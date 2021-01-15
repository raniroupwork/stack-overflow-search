/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import SOFReducer from './sof/reducer.js';

// all the reducers are in one place
const rootReducers = combineReducers({
    SOFReducer: SOFReducer,
});

export default rootReducers;
