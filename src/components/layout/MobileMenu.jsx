import React from 'react';
import styled from 'styled-components';

import { MenuItem } from './header-controls';

import { Box } from '../shared';

export const MENU_ANIMATION_NAME = 'mobile-menu';
export const MENU_ANIMATION_TIMEOUT = 350;

const Container = styled(Box)`
    left: 0px;
    z-index: 10;
    padding: 16px;
    &.${MENU_ANIMATION_NAME}-enter {
        transform: translateY(-300px);
        opacity: 0;
    }
    &.${MENU_ANIMATION_NAME}-enter-active {
        transform: translateY(0px);
        opacity: 1;
        transition: all ${MENU_ANIMATION_TIMEOUT}ms ease-out;
    }

    &.${MENU_ANIMATION_NAME}-exit {
        transform: translateY(0px);
        opacity: 1;
    }
    &.${MENU_ANIMATION_NAME}-exit-active {
        transform: translateY(-300px);
        opacity: 0;
        transition: all ${MENU_ANIMATION_TIMEOUT}ms ease-out;
    }
`;

Container.defaultProps = {
    bg: 'gray.0',
    position: 'relative',
    width: '100%',
};

const MobileMenu = ({
    links, activeUrl, setActiveUrl, userLinks, onCreateCoupon, ...rest
}) => (
    <Container {...rest}>
        <Box pb="24px">
            <MenuItem active={false} onClick={onCreateCoupon} fontWeight="bold" color="blue.0">
                Add new item
            </MenuItem>
        </Box>
        {[links, userLinks].map(linksGroup =>
            linksGroup.map(({ url, title }) => (
                <a href={url} key={url}>
                    <Box pb="24px">
                        <MenuItem
                            active={activeUrl.indexOf(url) >= 0}
                            onClick={() => setActiveUrl(url)}
                        >
                            {title}
                        </MenuItem>
                    </Box>
                </a>
            )))}
    </Container>
);

export default MobileMenu;
