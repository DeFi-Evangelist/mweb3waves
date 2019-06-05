import React from 'react';
import styled, { css } from 'styled-components';

import { Box } from '../shared';

const DEFAULT_WIDTH = 18;
const DEFAULT_BACKGROUND = '#000';

const LineMenu = styled(Box).attrs({
    as: 'span',
})`
    height: 2px;
    position: absolute;
    left: 0;
    transition: all linear 350ms;
`;

const HamburgerStyled = styled(Box).attrs({
    as: 'button',
})`
    z-index: 1;
    cursor: pointer;
    & > div {
        position: relative;
        &:before {
            width: 60px;
            height: 60px;
            position: absolute;
            left: -20px;
            top: -20px;
            content: ' ';
        }
    }
    ${({ isActive }) =>
        isActive
        && css`
            ${LineMenu} {
                opacity: 0;

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
    onClick,
    width = DEFAULT_WIDTH,
    bg = DEFAULT_BACKGROUND,
    isActive,
    ...rest
}) => (
    <HamburgerStyled onClick={onClick} isActive={isActive} {...rest}>
        <div>
            <LineMenu top="0px" width={`${width}px`} bg={bg} />
            <LineMenu top="5px" width={`${width}px`} bg={bg} />
            <LineMenu top="10px" width={`${width}px`} bg={bg} />
        </div>
    </HamburgerStyled>
);

export default Hamburger;
