import React from 'react';
import styled from 'styled-components';

import LogoIcon from './LogoIcon';

import { Box, Flex } from '../../shared';

const Title = styled(Box).attrs({
    as: 'span',
    display: 'block',
    fontSize: '22px',
})`
    white-space: nowrap;
`;

Title.defaultProps = {
    color: 'blue.0',
};

const Bold = styled.b`
    font-weight: 900;
`;

const Pointer = styled.div`
    cursor: pointer;
`;

const Logo = ({ isActive, ...rest }) => (
    <Flex {...rest} as={Pointer}>
        <LogoIcon isActive={isActive} />
        <Box pl="9px">
            <Title color={isActive ? 'blue.0' : 'gray.2'}>
                <Bold>Coupon</Bold>
                {' '}
                Bazaar
            </Title>
            <Title color={isActive ? 'blue.0' : 'gray.2'}>Market</Title>
        </Box>
    </Flex>
);

export default Logo;
