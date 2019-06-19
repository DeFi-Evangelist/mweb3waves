import configureStore from './configureStore';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default () =>
    configureStore({
        rootReducer: rootReducer(),
        rootSaga,
    });
