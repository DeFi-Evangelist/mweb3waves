import React from 'react';
import styled from 'styled-components';

import LogoIcon from './LogoIcon';

import { Box, Flex } from '../../shared';

const Title = styled(Box).attrs({
    as: 'span',
    display: 'block',
})`
    white-space: nowrap;
`;

Title.defaultProps = {
    color: 'blue.0',
    fontSize: '22px',
};

const Bold = styled.b`
    font-weight: 900;
`;

const Pointer = styled.div`
    cursor: pointer;
`;

const Logo = ({ isActive, size, ...rest }) => {
    const iconSize = size === 'small' ? '33' : '48';
    const fontSize = size === 'small' ? '16px' : '22px';

    return (
        <Flex {...rest} as={Pointer}>
            <LogoIcon isActive={isActive} width={iconSize} height={iconSize} />
            <Box pl="9px">
                <Title color={isActive ? 'blue.0' : 'gray.2'} fontSize={fontSize}>
                    <Bold>Coupon</Bold>
                    {' '}
                    Bazaar
                </Title>
                <Title color={isActive ? 'blue.0' : 'gray.2'} fontSize={fontSize}>
                    Market
                </Title>
            </Box>
        </Flex>
    );
};

export default Logo;
