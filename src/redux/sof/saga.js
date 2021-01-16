/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

import SOFService from '../../services/sof.js';

/* Types */
import { FETCH_SOF_SEARCH } from './types';
import { SET_PAGE_SIZE } from './types';
import { SET_PERIOD_DATES } from './types';

function* fetchSOFSearch(action) {
    // const response = yield call(SOFService.getSearchResults, action.data);
    // if (response.status === 200) {
    //     yield put({ type: FETCH_SOF_SEARCH.SUCCESS, SOFSearchData: response.data });
    // } else {
    //     yield put({ type: FETCH_SOF_SEARCH.FAILURE, SOFSearchError: response.data.error });
    // }
}

function* setPageSize(action) {
    yield put({ type: SET_PAGE_SIZE.SUCCESS, PageSize: action.data.pageSize });
}

function* setPeriodDates(action) {
    yield put({ type: SET_PERIOD_DATES.SUCCESS, PeriodDates: action.data });
}

export const SOFSaga = [
    takeEvery(FETCH_SOF_SEARCH.REQUEST, fetchSOFSearch),
    takeEvery(SET_PAGE_SIZE.REQUEST, setPageSize),
    takeEvery(SET_PERIOD_DATES.REQUEST, setPeriodDates),
];
