import styled from 'styled-components';

import { Box } from '../../shared';

const HeaderLayout = styled(Box).attrs({
    bg: 'gray.0',
})`
    box-shadow: 0px 2px 10px #edeef0;
    width: 100%;
    z-index: 1;
`;

HeaderLayout.defaultProps = {
    position: 'relative',
};

export default HeaderLayout;
