import styled from 'styled-components';

import { Box } from '../shared';

export const OVERLAY_ANIMATION_NAME = 'overlay';
export const OVERLAY_ANIMATION_TIMEOUT = 350;

const Overlay = styled(Box).attrs({
    bg: 'rgba(0,0,0,.5)',
    bottom: '0px',
    left: '0px',
    position: 'fixed',
    right: '0px',
    zIndex: 9,
})`
    &.${OVERLAY_ANIMATION_NAME}-enter {
        opacity: 0;
    }
    &.${OVERLAY_ANIMATION_NAME}-enter-active {
        opacity: 1;
        transition: opacity ${OVERLAY_ANIMATION_TIMEOUT}ms ease-out;
    }

    &.${OVERLAY_ANIMATION_NAME}-exit {
        opacity: 1;
    }
    &.${OVERLAY_ANIMATION_NAME}-exit-active {
        opacity: 0;
        transition: opacity ${OVERLAY_ANIMATION_TIMEOUT}ms ease-out;
    }
`;

export default Overlay;
