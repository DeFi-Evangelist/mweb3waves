import React from 'react';
import useForm from 'react-hook-form';

import * as Controls from './controls';

import { Box, Flex } from '../shared';

const Form = ({ onClose, onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <Box width="600px" as="form" onSubmit={handleSubmit(onSubmit)}>
            <Flex bg="gray.0" p="16px">
                <Box>
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
                            rows="5"
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

                <Box pl="16px">
                    <Controls.SmallLogo />
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
                            rows="5"
                            width="100%"
                            control="textarea"
                            title="Long description"
                            forwardRef={register({ required: true })}
                            error={errors.longDescription}
                        />
                    </Box>
                </Box>
            </Flex>

            <Controls.Footer>
                <Controls.Button onClick={onClose}>Cancel</Controls.Button>
                <Controls.Button color="blue.0" type="submit">
                    Submit
                </Controls.Button>
            </Controls.Footer>
        </Box>
    );
};

export default Form;
