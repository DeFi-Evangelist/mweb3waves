import React from 'react';

import * as Controls from './controls';

import { Box, Flex, Text } from '../shared';

const Result = ({ onClose }) => (
    <Box width="600px">
        <Flex bg="gray.0" p="16px" flexDirection="column" alignItems="center">
            <Controls.SmallLogo />
            <Text lineHeight="22px" pt="10px" fontSize="18px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </Text>
        </Flex>

        <Controls.Footer>
            <Controls.Button onClick={onClose}>Cancel</Controls.Button>
        </Controls.Footer>
    </Box>
);

export default Result;
