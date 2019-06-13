import {
    applyMiddleware, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import {
    isNil, not, append, filter,
} from 'ramda';

import { pipe, pipeF } from '../libs/service';
import { INIT_APP } from '../reducers/root';

const sagaMiddleware = createSagaMiddleware();

const notNil = pipeF(isNil, not);

export default function configureStore({
    routerMiddleware, rootReducer, rootSaga, middlewares,
}) {
    const middlewareList = pipe(
        [routerMiddleware],
        x => [...x, ...(middlewares || [])],
        append(rootSaga && sagaMiddleware),
        filter(notNil),
    );

    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewareList)));

    if (rootSaga) {
        sagaMiddleware.run(rootSaga);
    }

    store.dispatch({ type: INIT_APP });

    return store;
}
