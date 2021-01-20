// Modules
import { all } from 'redux-saga/effects';

// Saga
import { SOFSaga } from './sof/saga.js';
import { historySaga } from './history/saga.js';
import { authSaga } from './auth/saga.js';

function* rootSagas() {
  yield all([
    ...SOFSaga,
    ...historySaga,
    ...authSaga,
  ]);
}

export default rootSagas;
