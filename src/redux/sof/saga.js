/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

import SOFService from '../../services/sof.js';

/* Types */
import { FETCH_SOF_SEARCH } from './types';

function* fetchSOFSearch(action) {
    const response = yield call(SOFService.getSearchResults, action.data);
    if (response.status === 200) {
        console.log('FETCH!!!');
        // yield put({ type: FETCH_SOF_SEARCH.SUCCESS, SOFSearchData: response.data });
    } else {
        yield put({ type: FETCH_SOF_SEARCH.FAILURE, SOFSearchError: response.data.error });
    }
}

export const SOFSaga = [
    takeEvery(FETCH_SOF_SEARCH.REQUEST, fetchSOFSearch),
];
