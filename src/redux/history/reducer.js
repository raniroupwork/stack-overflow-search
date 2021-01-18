// Types
import {

    FETCH_SEARCH_HISTORY,
} from './types.js';

const INITIAL_STATE = {
    searchHistory: {
        data: [],
        isLoading: false,
        error: '',
    },
};

const SOFReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

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
