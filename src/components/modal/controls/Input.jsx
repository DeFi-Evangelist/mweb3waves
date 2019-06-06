import React from 'react';

import { Text, Box } from '../../shared';

const Input = ({
    title, control, forwardRef, error, ...props
}) => (
    <>
        <Text color={error ? 'red.0' : undefined}>{title}</Text>

        <Box mt="4px">
            <Box as={control} {...props} ref={forwardRef} />
        </Box>
    </>
);

Input.defaultProps = {
    control: 'input',
};

export default Input;
