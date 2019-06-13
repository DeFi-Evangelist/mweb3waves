export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (Object.keys(handlers).find(x => x === action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    };
}
