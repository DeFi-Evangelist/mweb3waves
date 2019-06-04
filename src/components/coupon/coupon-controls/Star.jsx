import React from 'react';

const Star = ({ active }) => (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            id="Star"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"
            fill={active ? '#FFC300' : '#9FA0A2'}
        />
    </svg>
);

export default Star;
