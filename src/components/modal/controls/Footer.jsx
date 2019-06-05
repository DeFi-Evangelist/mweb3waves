import styled from 'styled-components';

import { Flex } from '../../shared';

const Border = styled.div`
    border-top: 1px solid ${({ theme: { colors } }) => colors.gray[2]};
`;

const Footer = styled(Flex).attrs({
    as: Border,
    bg: 'gray.0',
    justifyContent: 'flex-end',
    px: '10px',
})``;

export default Footer;
