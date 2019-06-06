import React, { Fragment } from 'react';

import * as Controls from './header-controls';

import { Flex, Box } from '../shared';

const menuIndent = {
    0: '16px',
    xl: '46px',
};

const HeaderMenu = ({
    links,
    activeUrl,
    setActiveUrl,
    userLinks,
    onCreateCoupon,
    filterActive,
    onChangeFilterState,
}) => (
    <Flex justifyContent="right" alignItems="center" flexDirection="column">
        <Flex width="100%" justifyContent="flex-end" pb="20px">
            <Controls.SearchIcon isActive={false} />
            <Box pl="15px">
                <Controls.ShopIcon
                    isActive={filterActive}
                    onClick={() => onChangeFilterState(true)}
                />
            </Box>
        </Flex>
        <Flex>
            {links.map(({ url, title }, index) => (
                <Box key={url} as="span" pl={index !== 0 && menuIndent}>
                    <a href={url}>
                        <Controls.MenuItem
                            active={activeUrl.indexOf(url) >= 0}
                            onClick={() => setActiveUrl(url)}
                        >
                            {title}
                        </Controls.MenuItem>
                    </a>
                </Box>
            ))}

            <Box as="span" pl={menuIndent}>
                <Controls.MenuItem active={false} onClick={onCreateCoupon} color="blue.0">
                    Add new item
                </Controls.MenuItem>
            </Box>

            <Flex pl="46px" alignItems="center">
                {userLinks.map(({ url, title }, index) => (
                    <Fragment key={url}>
                        {index !== 0 && (
                            <Box width="1px" as="span" mx="6px" height="13px" bg="gray.2" />
                        )}
                        <a href={url}>
                            <Controls.MenuItem
                                active={activeUrl.indexOf(url) >= 0}
                                onClick={() => setActiveUrl(url)}
                            >
                                {title}
                            </Controls.MenuItem>
                        </a>
                    </Fragment>
                ))}
            </Flex>
        </Flex>
    </Flex>
);

export default HeaderMenu;
