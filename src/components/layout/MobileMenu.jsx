import React, { useEffect } from 'react';
import styled from 'styled-components';

import * as Controls from './header-controls';
import * as LINKS from './links';
import LogoCopyright from './LogoCopyright';
import SocialButtons from './SocialButtons';

import { Box, Flex, Text } from '../shared';

export const menuAnimation = {
    classNames: 'mobile-menu',
    timeout: 350,
};

const Container = styled(Box)`
    left: 0px;
    z-index: 10;
    padding: 20px;
    overflow-y: auto;
    svg {
        cursor: pointer;
    }
    &.${menuAnimation.classNames}-enter {
        transform: translateX(-600px);
        opacity: 0;
    }
    &.${menuAnimation.classNames}-enter-active {
        transform: translateX(0px);
        opacity: 1;
        transition: all ${menuAnimation.timeout}ms ease-out;
    }

    &.${menuAnimation.classNames}-exit {
        transform: translateX(0px);
        opacity: 1;
    }
    &.${menuAnimation.classNames}-exit-active {
        transform: translateX(-600px);
        opacity: 0;
        transition: all ${menuAnimation.timeout}ms ease-out;
    }
`;

Container.defaultProps = {
    bg: 'gray.0',
    position: 'relative',
    width: '100%',
    height: '100%',
};

const textProps = {
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: '600',
};

const GroupLinks = ({ title, links, ...rest }) => (
    <Box {...rest}>
        {title && (
            <Text letterSpacing="0.65625px" {...textProps} pb="17px">
                {title}
            </Text>
        )}
        <Box>
            {links.map(({ title: linkTitle, url }) => (
                <a key={url} href={url}>
                    <Text color="blue.0" {...textProps} pb="17px">
                        {linkTitle}
                    </Text>
                </a>
            ))}
        </Box>
        <Box width="100%" height="1px" bg="gray.3" />
    </Box>
);

const MobileMenu = ({ onClose, ...rest }) => {
    useEffect(() => () => onClose(), []);
    return (
        <Container {...rest}>
            <Flex justifyContent="flex-end">
                <Controls.CloseIcon onClick={onClose} />
            </Flex>
            <GroupLinks links={LINKS.headerLinks} />
            <GroupLinks title="Company" links={LINKS.companyLinks} pt="20px" />
            <GroupLinks title="Work with Coupon Bazaar" links={LINKS.workLinks} pt="20px" />
            <GroupLinks title="More" links={LINKS.moreLinks} pt="20px" />
            <GroupLinks title="Main" links={LINKS.mainLinks} pt="20px" />
            <Flex flexDirection="column" py="20px">
                <Box pb="20px">
                    <LogoCopyright size="small" />
                </Box>
                <Flex>
                    <SocialButtons />
                </Flex>
            </Flex>
        </Container>
    );
};

export default MobileMenu;
