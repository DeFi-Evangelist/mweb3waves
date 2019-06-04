import React from 'react';
import styled from 'styled-components';

import { Box } from '../../shared';

const DiscountStyled = styled(Box).attrs({
    bg: 'green.0',
})`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.65625px;
    }
`;

const Discount = ({ children }) => (
    <DiscountStyled>
        <span>
            {children}
        </span>
    </DiscountStyled>
);

export default Discount;
