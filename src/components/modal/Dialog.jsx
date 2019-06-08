import React from 'react';

import * as Controls from './controls';

import { Box, Flex, Text } from '../shared';
import Coupon from '../coupon';

const Dialog = ({ coupon, onClose, onSubmit }) => (
    <Box width="600px">
        <Flex bg="gray.0" p="16px">
            <Box flex={1}>
                <Coupon {...coupon} />
            </Box>

            <Box pl="16px">
                <Controls.SmallLogo />
                <Text lineHeight="22px" fontWeight="bold" pt="10px" fontSize="22px">
                    Lorem Impusm is dummy text
                </Text>
                <Text lineHeight="18px" pt="10px" fontSize="14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                </Text>
            </Box>
        </Flex>

        <Controls.Footer>
            <Controls.Button onClick={onClose}>Cancel</Controls.Button>
            <Controls.Button color="blue.0" onClick={onSubmit}>
                Buy
            </Controls.Button>
        </Controls.Footer>
    </Box>
);

export default Dialog;
