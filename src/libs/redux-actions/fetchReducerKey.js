export function fetchReducerKey(key, initialValue) {
    return {
        [key]: {
            data: initialValue,
            isFetching: false,
        },
    };
}
