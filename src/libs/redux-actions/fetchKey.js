const fetchKey = (key, initialValue) => fetchReducerFn => fetchReducerFn(key, initialValue);

export default fetchKey;
