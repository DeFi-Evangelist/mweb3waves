import { assocPath, concat, is } from 'ramda';

import { createReducer } from './createReducer';

import { pipe } from '../service';

const fetchReducer = fetchType => (key, initialValue) => {
    const initialState = {};
    const isArray = is(Array, initialValue);

    return createReducer(initialState, {
        [fetchType.REQUEST]: assocPath([key, 'isFetching'], true),
        [fetchType.SUCCESS]: (state, { response }) =>
            pipe(
                assocPath(
                    [key, 'data'],
                    isArray ? concat(state[key].data, response) : response,
                    state,
                ),
                assocPath([key, 'isFetching'], false),
            ),
        [fetchType.ERROR]: assocPath([key, 'isFetching'], false),
        [fetchType.CLEAR]: state =>
            pipe(
                assocPath([key, 'data'], initialValue, state),
                assocPath([key, 'isFetching'], false),
            ),
    });
};

export default fetchReducer;
