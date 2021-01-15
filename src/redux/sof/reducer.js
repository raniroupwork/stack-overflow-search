// Types
import {
    FETCH_SOF_SEARCH,
} from './types';

const INITIAL_STATE = {
    SOFResult: {
        data: [],
        isLoading: false,
        error: '',
    },
};

const SOFReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
                    data: action.SOFResultData,
                    isLoading: false,
                },
            };

        case FETCH_SOF_SEARCH.FAILURE:
            return {
                ...state,
                SOFResult: {
                    data: [],
                    isLoading: false,
                    error: action.SOFResultError,
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
