import React from 'react';
import styled from 'styled-components';

import { iconColor } from './iconColor';

const SearchIcon = ({ isActive, ...rest }) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <g id="search_icon">
            <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.4072 38.1233L53.5329 51.2461C54.1557 51.8687 54.1557 52.8984 53.5329 53.5211C53.2216 53.8443 52.8024 54 52.3952 54C51.988 54 51.5689 53.8324 51.2575 53.5211L38.1317 40.3982C34.0838 43.9184 28.8024 46.0497 23.0299 46.0497C10.3353 46.0497 0 35.7166 0 23.0248C0 10.333 10.3234 0 23.0299 0C35.7246 0 46.0599 10.3211 46.0599 23.0248C46.0599 28.796 43.9281 34.0763 40.4072 38.1233ZM23.018 3.23282C12.1078 3.23282 3.22156 12.1051 3.22156 23.0248C3.22156 33.9446 12.1078 42.8288 23.018 42.8288C33.9401 42.8288 42.8144 33.9326 42.8144 23.0248C42.8144 12.1171 33.9401 3.23282 23.018 3.23282Z"
                fill="#2EB4FF"
            />
        </g>
    </svg>
);

export default styled(SearchIcon)`
    ${iconColor}
`;
