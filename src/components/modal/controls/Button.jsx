import styled from 'styled-components';

import { Text } from '../../shared';

const Button = styled(Text).attrs({
    as: 'button',
    letterSpacing: '0.4375px',
    lineHeight: '22px',
    fontWeight: 'bold',
    p: '10px',
    fontSize: '18px',
})``;

export default Button;
