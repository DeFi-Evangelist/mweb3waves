import React from 'react';
import styled, { css } from 'styled-components';

import { Box, Flex } from '../shared';

const DEFAULT_BACKGROUND = '#000';

const LineMenu = styled(Box).attrs({
    as: 'span',
})`
    height: 2px;
    margin-bottom: 6px;
    left: 0;
    transition: all linear 350ms;
`;

const HamburgerStyled = styled(Box).attrs({
    as: 'button',
})`
    z-index: 1;
    cursor: pointer;
    position: relative;
    ${({ isActive }) =>
        isActive
        && css`
            ${LineMenu} {
                opacity: 0;
                width: 20px;
                &:first-child,
                &:last-child {
                    opacity: 1;
                    top: 5px;
                }
                &:first-child {
                    transform: rotate(45deg);
                }
                &:last-child {
                    transform: rotate(-45deg);
                }
            }
        `};
`;

const Hamburger = ({
    onClick, bg, isActive, ...rest
}) => (
    <HamburgerStyled onClick={onClick} isActive={isActive} {...rest}>
        <Flex flexDirection="column">
            <LineMenu top="0px" width="15px" bg={bg} />
            <LineMenu top="8px" width="27px" bg={bg} />
            <LineMenu top="16px" width="38px" bg={bg} />
        </Flex>
    </HamburgerStyled>
);

Hamburger.defaultProps = {
    bg: DEFAULT_BACKGROUND,
};

export default Hamburger;
