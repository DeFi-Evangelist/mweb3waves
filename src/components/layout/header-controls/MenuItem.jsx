import React from 'react';
import styled from 'styled-components';

import { Box } from '../../shared';

const MenuItemStyled = styled(Box).attrs(({ active }) => ({
    as: 'span',
    color: active ? 'blue.0' : 'gray.2',
}))`
    letter-spacing: 0.65625px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    white-space: nowrap;
    &:hover {
        color: ${({ theme: { colors } }) => colors.blue[0]};
    }
`;

const MenuItem = ({ children, active, onClick }) => (
    <MenuItemStyled active={active} onClick={onClick}>
        {children}
    </MenuItemStyled>
);

export default MenuItem;
