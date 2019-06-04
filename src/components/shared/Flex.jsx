import styled from 'styled-components';
import {
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    alignSelf,
    flex,
    order,
} from 'styled-system';

import Box from './Box';

const Flex = styled(Box)(
    {
        display: 'flex',
    },
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    alignSelf,
    flex,
    order,
);

Flex.displayName = 'Flex';

export default Flex;
