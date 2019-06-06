import React from 'react';
import styled from 'styled-components';

import { Text, Box } from '../../shared';

const InputStyled = styled(Box)`
    display: block;
    width: 100%;

    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }
`;

InputStyled.defaultProps = {
    height: '34px',
};

const Input = ({
    title, control, forwardRef, error, ...props
}) => (
    <>
        <Text color={error ? 'red.0' : 'black.0'} fontWeight="500">
            {title}
        </Text>

        <Box mt="4px">
            <InputStyled as={control} {...props} ref={forwardRef} />
        </Box>
    </>
);

Input.defaultProps = {
    control: 'input',
};

export default Input;
