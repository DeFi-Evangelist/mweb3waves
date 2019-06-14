import React from 'react';

import * as Icons from './social-icons';

import { Box } from '../shared';

const SocialButtons = () => (
    <>
        <Box>
            <Icons.Facebook />
        </Box>
        <Box pl="20px">
            <Icons.Twitter />
        </Box>
        <Box pl="20px">
            <Icons.Whatsapp />
        </Box>
        <Box pl="20px">
            <Icons.Linkedin />
        </Box>
        <Box pl="20px">
            <Icons.Telegram />
        </Box>
    </>
);

export default SocialButtons;
