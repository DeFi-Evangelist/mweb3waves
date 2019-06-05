import styled from 'styled-components';
import {
    background,
    color,
    display,
    fontSize,
    height,
    space,
    width,
    position,
    zIndex,
    top,
    left,
    right,
    bottom,
    flex,
    flexBasis,
    minWidth,
    overflow,
} from 'styled-system';

const Box = styled.div(
    {
        boxSizing: 'border-box',
    },
    space,
    width,
    height,
    fontSize,
    color,
    background,
    position,
    zIndex,
    top,
    left,
    right,
    bottom,
    flex,
    display,
    flexBasis,
    minWidth,
    overflow,
);

Box.displayName = 'Box';

export default Box;
