// Types
import {
    UPDATE_SEARCH_HISTORY,
    FETCH_SEARCH_HISTORY,
} from './types.js';

const INITIAL_STATE = {
    searchHistory: {
        data: [],
        isLoading: false,
        error: '',
    },
};

const HistoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case UPDATE_SEARCH_HISTORY.REQUEST:
            return {
                ...state,
                searchHistory: {
                    ...state.searchHistory,
                    isLoading: true,
                },
            };

        case UPDATE_SEARCH_HISTORY.SUCCESS:
            return {
                ...state,
                searchHistory: {
                    ...state.searchHistory,
                    data: state.searchHistory.data.concat(action.HistorySearchData),
                    isLoading: false,
                },
            };

        case UPDATE_SEARCH_HISTORY.FAILURE:
            return {
                ...state,
                searchHistory: {
                    data: [],
                    isLoading: false,
                    error: action.HistorySearchError,
                },
            };

        case FETCH_SEARCH_HISTORY.REQUEST:
            return {
                ...state,
                searchHistory: {
                    ...state.searchHistory,
                    isLoading: true,
                },
            };

        case FETCH_SEARCH_HISTORY.SUCCESS:
            return {
                ...state,
                searchHistory: {
                    data: action.HistorySearchData,
                    isLoading: false,
                },
            };

        case FETCH_SEARCH_HISTORY.FAILURE:
            return {
                ...state,
                searchHistory: {
                    data: [],
                    isLoading: false,
                    error: action.HistorySearchError,
                },
            };

        default:
            return state;
    }
};

export default HistoryReducer;
