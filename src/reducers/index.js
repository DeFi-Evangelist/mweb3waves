import { combineReducers } from 'redux';

import coupons from './coupons';
import root from './root';

export default () =>
    combineReducers({
        coupons,
        root,
    });
