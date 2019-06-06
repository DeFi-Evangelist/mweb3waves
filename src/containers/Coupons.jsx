import React from 'react';
import styled from 'styled-components';

import Coupon from '../components/coupon';
import { Box } from '../components/shared';

const Card = styled(Box)`
    cursor: pointer;
    transition: box-shadow linear 200ms;
    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
`;

const Coupons = ({ onDialogOpen, coupons }) =>
    coupons.map(coupon => (
        <Box key={coupon.id} p="20px" width={{ 0: '100%', md: 'initial' }}>
            <Box as={Card}>
                <Coupon
                    width={{ 0: '100%', md: '300px' }}
                    height="300px"
                    {...coupon}
                    onClick={() => onDialogOpen(coupon)}
                />
            </Box>
        </Box>
    ));

export default Coupons;
