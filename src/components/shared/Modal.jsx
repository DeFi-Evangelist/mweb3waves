import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';

import Box from './Box';

import { OVERLAY_ANIMATION_NAME, OVERLAY_ANIMATION_TIMEOUT, Overlay } from '../layout';

const modalContainer = document.getElementById('modal');

const Container = styled(Box)`
    margin: 0 auto;
    top: 0;
    z-index: 15;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: 10%;
    &.modal-enter {
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    &.modal-enter-active {
        transform: translate(-50%, 0);
        opacity: 1;
        transition: all ${OVERLAY_ANIMATION_TIMEOUT}ms ease-out;
    }

    &.modal-exit {
        transform: translate(-50%, 0);
        opacity: 1;
    }
    &.modal-exit-active {
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all ${OVERLAY_ANIMATION_TIMEOUT}ms ease-out;
    }
`;

const Modal = ({
    children, open, onClose, ...rest
}) =>
    ReactDOM.createPortal(
        <>
            <CSSTransition
                in={open}
                timeout={OVERLAY_ANIMATION_TIMEOUT}
                classNames="modal"
                unmountOnExit
            >
                <Container {...rest}>{children}</Container>
            </CSSTransition>
            <CSSTransition
                in={open}
                timeout={OVERLAY_ANIMATION_TIMEOUT}
                classNames={OVERLAY_ANIMATION_NAME}
                unmountOnExit
            >
                <Overlay top="0px" onClick={onClose} />
            </CSSTransition>
        </>,
        modalContainer,
    );

export default Modal;
