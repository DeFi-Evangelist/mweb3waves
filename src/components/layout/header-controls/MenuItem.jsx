import React from 'react';
import styled from 'styled-components';
import { fontWeight } from 'styled-system';

import { Box } from '../../shared';

const MenuItemStyled = styled(Box).attrs(({ active, color }) => ({
    as: 'span',
    color: active ? 'blue.0' : color || 'gray.2',
}))`
    letter-spacing: 0.65625px;
    font-size: 14px;
    line-height: 17px;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        color: ${({ theme: { colors } }) => colors.blue[0]};
    }
    ${fontWeight}
`;

const MenuItem = ({
    children, active, onClick, ...rest
}) => (
    <MenuItemStyled active={active} onClick={onClick} {...rest}>
        {children}
    </MenuItemStyled>
);

MenuItem.defaultProps = {
    fontWeight: '500',
};

export default MenuItem;
