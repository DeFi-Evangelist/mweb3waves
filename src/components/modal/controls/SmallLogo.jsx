import styled from 'styled-components';

import { Logo } from '../../layout/header-controls';

const SmallLogo = styled(Logo)`
    svg {
        width: 32px;
        height: 32px;
    }
    span {
        font-size: 14px;
    }
`;

export default SmallLogo;
