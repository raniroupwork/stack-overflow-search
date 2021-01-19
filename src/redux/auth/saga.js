/* Modules */
import { put, takeEvery } from 'redux-saga/effects';


/* Types */
import { SIGN_IN, SIGN_OUT} from './types';

function* signIn(action) {
    yield put({ type: SIGN_IN.SUCCESS, payLoad: action.data });
}

function* signOut() {
    yield put({ type: SIGN_OUT.SUCCESS });
}

export const authSaga = [
    takeEvery(SIGN_IN.REQUEST, signIn),
    takeEvery(SIGN_OUT.REQUEST, signOut),
];
