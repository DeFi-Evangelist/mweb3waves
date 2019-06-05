import React from 'react';
import styled from 'styled-components';

import { MenuItem } from './header-controls';

import { Box } from '../shared';

export const MENU_ANIMATION_NAME = 'mobile-menu';
export const MENU_ANIMATION_TIMEOUT = 350;

const Container = styled(Box)`
    bottom: 0px;
    left: 0px;
    z-index: 10;
    &.${MENU_ANIMATION_NAME}-enter {
        transform: translateX(-300px);
        opacity: 0;
    }
    &.${MENU_ANIMATION_NAME}-enter-active {
        transform: translateX(0px);
        opacity: 1;
        transition: all ${MENU_ANIMATION_TIMEOUT}ms ease-out;
    }

    &.${MENU_ANIMATION_NAME}-exit {
        transform: translateX(0px);
        opacity: 1;
    }
    &.${MENU_ANIMATION_NAME}-exit-active {
        transform: translateX(-300px);
        opacity: 0;
        transition: all ${MENU_ANIMATION_TIMEOUT}ms ease-out;
    }
`;

Container.defaultProps = {
    bg: 'gray.0',
    pb: 7,
    pl: 9,
    position: 'relative',
    pt: 11,
    width: '184px',
};

const MobileMenu = ({
    links, activeUrl, setActiveUrl, userLinks, ...rest
}) => (
    <Container {...rest}>
        {[links, userLinks].map(linksGroup =>
            linksGroup.map(({ url, title }) => (
                <a href={url} key={url}>
                    <Box pb="12px">
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
