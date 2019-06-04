import React, { useEffect, useState } from 'react';

import Coupon from '../components/coupon';
import { getCoupons } from '../api';
import { Box } from '../components/shared';

const Coupons = ({ onDialogOpen }) => {
    const [coupons, updateCoupons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getCoupons();
            updateCoupons(response);
        }
        fetchData();
    }, []);

    return coupons.map(coupon => (
        <Box key={coupon.id} p="20px">
            <Coupon {...coupon} onClick={() => onDialogOpen(coupon)} />
        </Box>
    ));
};

export default Coupons;
