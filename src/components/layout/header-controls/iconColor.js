import { css } from 'styled-components';

const getColor = (isActive, colors) => (isActive ? colors.blue[0] : colors.gray[2]);

const fill = css`
    ${({ isActive, theme: { colors } }) => css`
        fill: ${getColor(isActive, colors)};
    `}
`;

export const logoColor = css`
    cursor: pointer;
    rect {
        ${fill};
    }
`;

export const iconColor = css`
    cursor: pointer;
    path {
        ${fill};
    }
`;
