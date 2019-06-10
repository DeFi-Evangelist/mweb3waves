import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';

import * as Controls from './controls';

import { Box, Flex } from '../shared';

const HEIGHTS = [300, 400, 500, 600, 700];
const FORM_PARAMETER = 150;

const HeightProps = styled.div`
    overflow-y: auto;
    ${HEIGHTS.reduce(
        (accum, val) =>
            `${accum}
        @media (min-height: ${val}px) {
            height: ${val - FORM_PARAMETER}px;
        }
    `,
        '',
    )}
    @media (min-height: 800px) {
        height: initial;
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            height: 700px;
        }
    }
`;

const Form = ({ onClose, onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <Box
            width={{
                0: '100%',
                lg: '800px',
            }}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box bg="gray.0">
                <Flex p="10px" justifyContent="center">
                    <Controls.SmallLogo />
                </Flex>

                <Flex
                    bg="gray.0"
                    p="16px"
                    flexDirection={{
                        0: 'column',
                        sm: 'row',
                    }}
                    as={HeightProps}
                >
                    <Box flex={1}>
                        <Box pb="8px">
                            <Controls.Input
                                name="image"
                                title="Image url"
                                forwardRef={register({ required: true })}
                                error={errors.image}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                type="number"
                                name="oldPrice"
                                title="Old price"
                                forwardRef={register({ required: true })}
                                error={errors.oldPrice}
                            />
                        </Box>

                        <Box pb="8px">
                            <Controls.Input
                                type="number"
                                name="newPrice"
                                title="New price"
                                forwardRef={register({ required: true })}
                                error={errors.newPrice}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="name"
                                title="Name"
                                forwardRef={register({ required: true })}
                                error={errors.name}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="shortDescription"
                                height="150px"
                                width="100%"
                                control="textarea"
                                title="Short description"
                                forwardRef={register({ required: true })}
                                error={errors.shortDescription}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="title"
                                title="Title"
                                forwardRef={register({ required: true })}
                                error={errors.title}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="couponTerm"
                                title="Coupon term"
                                forwardRef={register({ required: true })}
                                error={errors.couponTerm}
                            />
                        </Box>
                    </Box>

                    <Box
                        pl={{
                            sm: '16px',
                        }}
                        flex={1}
                    >
                        <Box pb="8px">
                            <Controls.Input
                                name="longTitle"
                                title="Long title"
                                forwardRef={register({ required: true })}
                                error={errors.longTitle}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="longDescription"
                                height="150px"
                                width="100%"
                                control="textarea"
                                title="Long description"
                                forwardRef={register({ required: true })}
                                error={errors.longDescription}
                            />
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Controls.Footer>
                <Controls.Button onClick={onClose}>Cancel</Controls.Button>
                <Controls.Button color="blue.0" type="submit">
                    Add item
                </Controls.Button>
            </Controls.Footer>
        </Box>
    );
};

export default Form;
