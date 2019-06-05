const pipe = (value, ...functions) => functions.reduce((newValue, func) => func(newValue), value);

export const pipeF = (...functions) => value =>
    pipe(
        value,
        ...functions,
    );

export default pipe;
