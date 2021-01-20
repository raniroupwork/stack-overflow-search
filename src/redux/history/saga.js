/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

import HistoryService from '../../services/history.js';

/* Types */
import { FETCH_SEARCH_HISTORY, UPDATE_SEARCH_HISTORY, DELETE_SEARCH_HISTORY } from './types';

// TODO: Create API
function* fetchSearchHistory(action) {
    const response = yield call(HistoryService.getSearchResults, action.data);

    if (response.status === 200) {
        yield put({ type: FETCH_SEARCH_HISTORY.SUCCESS, HistorySearchData: response.data });
    } else {
        yield put({ type: FETCH_SEARCH_HISTORY.FAILURE, HistorySearchError: response.data.error });
    }
}

// Adapted to work only locally, without usage of API requests
function* deleteSearchHistory(action) {
    
    console.log('HISTORY DELETE: ', action.data);

    yield put({ type: DELETE_SEARCH_HISTORY.SUCCESS, HistorySearchData: action.data });
}

// Adapted to work only locally, without usage of API requests
function* updateSearchHistory(action) {
    yield put({ type: UPDATE_SEARCH_HISTORY.SUCCESS, HistorySearchData: action.data });

    // const response = yield call(HistoryService.updateSearchHistory, action.data);
    
    // if (response.status === 200) {
    //     alert('Save History Success'); // REMOVE
    // } else {
    //     alert('Save History Error'); // REMOVE
    // }
}

export const historySaga = [
    takeEvery(FETCH_SEARCH_HISTORY.REQUEST, fetchSearchHistory),
    takeEvery(UPDATE_SEARCH_HISTORY.REQUEST, updateSearchHistory),
    takeEvery(DELETE_SEARCH_HISTORY.REQUEST, deleteSearchHistory),
];
