import { all } from 'redux-saga/effects';

import initSaga from './initSaga';

export default function* rootSaga() {
    yield all([initSaga()]);
}
