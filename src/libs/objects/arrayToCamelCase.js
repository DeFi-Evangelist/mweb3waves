import { pipe } from '../service';

const toCamelCaseString = key => key.replace(/_(.)/g, (_, group) => group.toUpperCase());
const setValueToKey = (value, obj) => key => ({ ...obj, [key]: value });

export const objectToCamelCase = obj =>
    Object.keys(obj).reduce(
        (accum, key) =>
            pipe(
                key,
                toCamelCaseString,
                setValueToKey(obj[key], accum),
            ),
        {},
    );

export default data => data.map(x => objectToCamelCase(x));
