// Modules
import { all } from 'redux-saga/effects';

// Saga
import { SOFSaga } from './sof/saga.js';

function* rootSagas() {
  yield all([
    ...SOFSaga,
  ]);
}

export default rootSagas;
