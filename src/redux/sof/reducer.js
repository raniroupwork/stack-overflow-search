// Types
import {
    FETCH_SOF_SEARCH,
    SET_PAGE_SIZE,
    SET_PERIOD_DATES,
    SET_SORT_BY,
    SET_SEARCH_TAGS,
    SET_SEARCH_TEXT,
} from './types.js';

const INITIAL_STATE = {
    SOFResult: {
        data: [],
        isLoading: false,
        error: '',
    },
    PageSize: {
        data: 5,
    },
    PeriodDates: {
        data: [],
    },
    SortBy: {
        data: 'activity',
    },
    SearchTags: {
        data: [],
    },
    SearchText: {
        data: '',
    },
};

const SOFReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT.REQUEST:
            return {
                ...state,
                SearchText: {
                    ...state.SearchText,
                },
            };

        case SET_SEARCH_TEXT.SUCCESS:
            return {
                ...state,
                SearchText: {
                    data: action.SearchText,
                },
        };

        case SET_SEARCH_TAGS.REQUEST:
            return {
                ...state,
                SearchTags: {
                    ...state.SearchTags,
                },
            };

        case SET_SEARCH_TAGS.SUCCESS:
            return {
                ...state,
                SearchTags: {
                    data: action.SearchTags,
                },
        };
     
        case SET_SORT_BY.REQUEST:
            return {
                ...state,
                SortBy: {
                    ...state.SortBy,
                },
            };

        case SET_SORT_BY.SUCCESS:
            return {
                ...state,
                SortBy: {
                    data:action.SortBy,
                },
        };
     
        case SET_PAGE_SIZE.REQUEST:
            return {
                ...state,
                PageSize: {
                    ...state.PageSize,
                },
            };

        case SET_PAGE_SIZE.SUCCESS:
            return {
                ...state,
                PageSize: {
                    data:action.PageSize,
                },
        };
     
        case SET_PERIOD_DATES.REQUEST:
            return {
                ...state,
                PeriodDates: {
                    ...state.PeriodDates,
                },
            };
            
        case SET_PERIOD_DATES.SUCCESS:
            return {
                ...state,
                PeriodDates: {
                    data:action.PeriodDates,
                },
        };

        case FETCH_SOF_SEARCH.REQUEST:
            return {
                ...state,
                SOFResult: {
                    ...state.SOFResult,
                    isLoading: true,
                },
            };

        case FETCH_SOF_SEARCH.SUCCESS:
            return {
                ...state,
                SOFResult: {
                    data: action.SOFSearchData,
                    isLoading: false,
                },
            };

        case FETCH_SOF_SEARCH.FAILURE:
            return {
                ...state,
                SOFResult: {
                    data: [],
                    isLoading: false,
                    error: action.SOFSearchError,
                },
            };

        case FETCH_SOF_SEARCH.RESET:
            return {
                ...state,
                SOFResult: INITIAL_STATE.SOFResult,
            };

        default:
            return state;
    }
};

export default SOFReducer;
