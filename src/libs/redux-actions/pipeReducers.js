const pipeReducers = (...reducers) => (state, action) =>
    reducers.reduce((next, reducer) => reducer(next, action), state);

export default pipeReducers;
