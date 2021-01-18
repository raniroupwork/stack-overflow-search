/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

import HistoryService from '../../services/history.js';

/* Types */
import { FETCH_SEARCH_HISTORY, UPDATE_SEARCH_HISTORY } from './types';


function* fetchSearchHistory(action) {
    const response = yield call(HistoryService.getSearchResults, action.data);
    console.log("Saga Action: ", action); // REMOVE
    console.log('Response: ', response); // REMOVE
    if (response.status === 200) {
        yield put({ type: FETCH_SEARCH_HISTORY.SUCCESS, HistorySearchData: response.data });
    } else {
        yield put({ type: FETCH_SEARCH_HISTORY.FAILURE, HistorySearchError: response.data.error });
    }
}

function* updateSearchHistory(action) {
    const response = yield call(HistoryService.updateSearchHistory, action.data);

    if (response.status === 200) {
        alert('Save History Success'); // REMOVE
        yield put({ type: FETCH_SEARCH_HISTORY.SUCCESS, HistorySearchData: response.data });
    } else {
        alert('Save History Error'); // REMOVE
        yield put({ type: FETCH_SEARCH_HISTORY.FAILURE, HistorySearchError: response.data.error });
    }
}

export const historySaga = [
    takeEvery(FETCH_SEARCH_HISTORY.REQUEST, fetchSearchHistory),
    takeEvery(UPDATE_SEARCH_HISTORY.REQUEST, updateSearchHistory),
];
