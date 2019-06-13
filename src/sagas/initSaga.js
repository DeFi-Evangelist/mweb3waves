import { takeLatest, fork } from 'redux-saga/effects';

import { wavesInit } from './service';

import * as rootActions from '../reducers/root';

function* init() {
    yield fork(wavesInit);
}

export default function* initSaga() {
    yield takeLatest([rootActions.INIT_APP], init);
}
