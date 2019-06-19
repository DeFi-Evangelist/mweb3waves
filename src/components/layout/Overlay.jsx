import styled from 'styled-components';

import { Box } from '../shared';

export const overlayAnimation = {
    classNames: 'overlay',
    timeout: 350,
};

const Overlay = styled(Box).attrs({
    bg: 'rgba(0,0,0,.5)',
    bottom: '0px',
    left: '0px',
    position: 'fixed',
    right: '0px',
    zIndex: 9,
})`
    &.${overlayAnimation.classNames}-enter {
        opacity: 0;
    }
    &.${overlayAnimation.classNames}-enter-active {
        opacity: 1;
        transition: opacity ${overlayAnimation.timeout}ms ease-out;
    }

    &.${overlayAnimation.classNames}-exit {
        opacity: 1;
    }
    &.${overlayAnimation.classNames}-exit-active {
        opacity: 0;
        transition: opacity ${overlayAnimation.timeout}ms ease-out;
    }
`;

export default Overlay;
