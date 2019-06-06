import React from 'react';

import Coupon from '../components/coupon';
import { Box } from '../components/shared';

const Coupons = ({ onDialogOpen, coupons }) => coupons.map(coupon => (
    <Box key={coupon.id} p="20px">
        <Coupon {...coupon} onClick={() => onDialogOpen(coupon)} />
    </Box>
));

export default Coupons;
