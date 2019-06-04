import { coupons } from './response';

import { arrayToCamelCase } from '../libs/objects';
import { pipe } from '../libs/service';

export const getCoupons = () =>
    new Promise(resolve =>
        pipe(
            coupons,
            arrayToCamelCase,
            resolve,
        ));
