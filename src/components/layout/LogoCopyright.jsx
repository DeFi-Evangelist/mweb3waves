import React from 'react';

import * as Controls from './header-controls';

import { Box, Text } from '../shared';

const YEAR = new Date().getFullYear();

const LogoCopyright = ({ size }) => (
    <Box>
        <Controls.Logo isActive size={size} />
        <Text as="span" color="gray.2" fontSize="12px" pt="10px">
            ©
            {' '}
            {YEAR}
            {' '}
            Groupon, Inc. All Rights Reserved
        </Text>
    </Box>
);

export default LogoCopyright;
