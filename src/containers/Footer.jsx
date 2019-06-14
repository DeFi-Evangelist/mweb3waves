import React from 'react';
import MediaQuery from 'react-responsive';

import { Box, Flex, Text } from '../components/shared';
import { SocialButtons, LogoCopyright } from '../components/layout';
import {
    companyLinks, moreLinks, workLinks, mainLinks,
} from '../components/layout/links';
import theme from '../styled-components/theme';

const { breakpoints } = theme;

const GroupLinks = ({ title, links }) => (
    <Flex flexDirection="column">
        <Text as="span" fontWeight="bold" letterSpacing="0.66px" fontSize="14px">
            {title}
        </Text>
        <Box pt="10px">
            {links.map(({ url, title: linkTitle }) => (
                <a key={url} href={url}>
                    <Text color="gray.2" lineHeight="24px" fontSize="14px">
                        {linkTitle}
                    </Text>
                </a>
            ))}
        </Box>
    </Flex>
);

const Footer = () => (
    <Flex flexDirection="column" bg="gray.0" px="40px">
        <MediaQuery minWidth={breakpoints.sm}>
            <Flex
                py="48px"
                justifyContent={{
                    xl: 'center',
                }}
            >
                <MediaQuery minWidth={breakpoints.xl}>
                    <LogoCopyright />
                </MediaQuery>

                <Box
                    pl={{
                        xl: '54px',
                    }}
                >
                    <GroupLinks title="Company" links={companyLinks} />
                </Box>
                <Box pl="54px">
                    <GroupLinks title="Work with Coupon Bazaar" links={workLinks} />
                </Box>
                <Box pl="54px">
                    <GroupLinks title="More" links={moreLinks} />
                </Box>
                <Box pl="54px">
                    <GroupLinks title="Main" links={mainLinks} />
                </Box>
                <MediaQuery minWidth={breakpoints.xl}>
                    <Flex pl="54px">
                        <SocialButtons />
                    </Flex>
                </MediaQuery>
            </Flex>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.xl}>
            <MediaQuery minWidth={breakpoints.sm}>
                <Box width="100%" height="1px" bg="gray.3" />
            </MediaQuery>
            <Flex
                pt="35px"
                pb="50px"
                flexDirection={{
                    0: 'column',
                    sm: 'row',
                }}
            >
                <MediaQuery minWidth={breakpoints.sm}>
                    <LogoCopyright />
                </MediaQuery>
                <MediaQuery maxWidth={breakpoints.sm}>
                    <LogoCopyright size="small" />
                </MediaQuery>
                <Flex
                    pl={{
                        0: '0',
                        sm: '100px',
                    }}
                    pt={{
                        0: '20px',
                        sm: '0',
                    }}
                >
                    <SocialButtons />
                </Flex>
            </Flex>
        </MediaQuery>
    </Flex>
);

export default Footer;
