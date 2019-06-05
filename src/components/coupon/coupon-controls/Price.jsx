import React from 'react';
import styled from 'styled-components';

import { Box } from '../../shared';

const PriceStyled = styled(Box)`
    padding: 0 6px;
    position: relative;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.4375px;
`;

const Price = ({ children, isOld, term }) => (
    <PriceStyled color={!isOld ? 'green.1' : undefined}>
        <Box as="span" pr="2px">
            {term}
        </Box>
        {children}
        {isOld && (
            <Box bg="red.0" position="absolute" top="50%" left="0px" right="0px" height="1px" />
        )}
    </PriceStyled>
);

export default Price;
