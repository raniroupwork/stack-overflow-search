// Types
import {
    SIGN_IN,
    SIGN_OUT,
} from './types.js';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SIGN_IN.REQUEST:
            return {
                ...state,
                isSignedIn: false,
            };
        
        case SIGN_IN.SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload,
            };
                    
            case SIGN_OUT.REQUEST:
                return {
                    ...state,
                    isSignedIn: true,
                };
                
            case SIGN_OUT.SUCCESS:
                return {
                    ...state,
                    isSignedIn: false,
                    userId: null,
                };

        default:
            return state;
    }
};

export default authReducer;
