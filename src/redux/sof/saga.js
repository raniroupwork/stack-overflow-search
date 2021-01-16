/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

import SOFService from '../../services/sof.js';

/* Types */
import { FETCH_SOF_SEARCH } from './types';
import { SET_PAGE_SIZE } from './types';
import { SET_PERIOD_DATES } from './types';
import { SET_SORT_BY } from './types';
import { SET_SEARCH_TAGS } from './types';
import { SET_SEARCH_TEXT } from './types';

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

function* setSortType(action) {
    yield put({ type: SET_SORT_BY.SUCCESS, SortBy: action.data.sortBy });
}

function* setSearchTags(action) {
    yield put({ type: SET_SEARCH_TAGS.SUCCESS, SearchTags: action.data.searchTags });
}

function* setSearchText(action) {
    yield put({ type: SET_SEARCH_TEXT.SUCCESS, SearchText: action.data.searchText });
}

export const SOFSaga = [
    takeEvery(FETCH_SOF_SEARCH.REQUEST, fetchSOFSearch),
    takeEvery(SET_PAGE_SIZE.REQUEST, setPageSize),
    takeEvery(SET_PERIOD_DATES.REQUEST, setPeriodDates),
    takeEvery(SET_SEARCH_TAGS.REQUEST, setSearchTags),
    takeEvery(SET_SEARCH_TEXT.REQUEST, setSearchText),
];
