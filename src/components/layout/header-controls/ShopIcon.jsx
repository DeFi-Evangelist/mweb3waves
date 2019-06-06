import React from 'react';
import styled from 'styled-components';

import { iconColor } from './iconColor';

const ShopIcon = ({ isActive, ...rest }) => (
    <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <g id="shopping-basket-button">
            <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3486 6.91099L11.9083 0.394914C11.7064 0.197457 11.4037 0 11.1009 0C10.7982 0 10.4954 0.0987285 10.2936 0.394914L5.85321 6.91099H1.00917C0.40367 6.91099 0 7.30591 0 7.89828V8.19447L2.52294 17.3762C2.72477 18.166 3.53211 18.8571 4.44037 18.8571H17.5596C18.4679 18.8571 19.2752 18.2648 19.4771 17.3762L22 8.19447V7.89828C22 7.30591 21.5963 6.91099 20.9908 6.91099H16.3486ZM8.07339 6.91099L11.1009 2.56694L14.1284 6.91099H8.07339ZM9.08257 12.8347C9.08257 13.9207 9.99083 14.8093 11.1009 14.8093C12.211 14.8093 13.1193 13.9207 13.1193 12.8347C13.1193 11.7487 12.211 10.8601 11.1009 10.8601C9.99083 10.8601 9.08257 11.7487 9.08257 12.8347Z"
                fill="#2EB4FF"
            />
        </g>
    </svg>
);

export default styled(ShopIcon)`
    ${iconColor}
`;
