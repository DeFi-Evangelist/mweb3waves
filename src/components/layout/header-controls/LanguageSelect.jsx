import React from 'react';

import Icons from './language-icons';
import TriangleIcon from './TriangleIcon';
import MenuItem from './MenuItem';

import { Box, Flex } from '../../shared';

const langugeShortNames = {
    english: 'Eng',
};

const LanguageSelect = ({ language }) => {
    const Component = Icons[language];
    return (
        <Flex alignItems="center">
            <Component />
            <Box px="5px">
                <MenuItem active={false}>{langugeShortNames[language]}</MenuItem>
            </Box>
            <TriangleIcon />
        </Flex>
    );
};

export default LanguageSelect;
