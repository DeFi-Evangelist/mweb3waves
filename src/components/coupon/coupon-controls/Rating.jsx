import React from 'react';

import Star from './Star';

import { Flex, Box } from '../../shared';

const stars = [1, 2, 3, 4, 5];

const Rating = ({ value, children }) => {
    const ceilValue = Math.ceil(value);

    return (
        <Flex>
            <Box>
                {stars.map((val, ind) => (
                    <Box key={val} pl={ind !== 0 && '6px'} as="span">
                        <Star active={val <= ceilValue} />
                    </Box>
                ))}
            </Box>
            <Box as="span" fontSize="12px" pl="8px">
                {children}
            </Box>
        </Flex>
    );
};

export default Rating;
