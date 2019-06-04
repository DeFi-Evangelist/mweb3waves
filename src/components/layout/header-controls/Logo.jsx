import React from 'react';
import styled from 'styled-components';

import LogoIcon from './LogoIcon';

import { Box, Flex } from '../../shared';

const Title = styled(Box).attrs({
    as: 'span',
    color: 'blue.0',
    display: 'block',
    fontSize: '22px',
})`
    white-space: nowrap;
`;

const Bold = styled.b`
    font-weight: 900;
`;

const Logo = props => (
    <Flex {...props}>
        <LogoIcon />
        <Box pl="9px">
            <Title>
                <Bold>Coupon</Bold>
                {' '}
                Bazaar
            </Title>
            <Title>Market</Title>
        </Box>
    </Flex>
);

export default Logo;
