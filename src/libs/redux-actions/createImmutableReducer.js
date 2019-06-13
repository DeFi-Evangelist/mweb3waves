import produce from 'immer';

export function createImmutableReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (Object.keys(handlers).find(x => x === action.type)) {
            return produce(state, (draftState) => {
                handlers[action.type](draftState, action);
            });
        }
        return state;
    };
}
