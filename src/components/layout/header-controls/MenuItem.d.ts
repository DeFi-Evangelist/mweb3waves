import React, { FunctionComponent } from 'react';

interface MenuItemProps {
    active?: boolean;
    onClick: () => void;
}

export declare const MenuItem:FunctionComponent<MenuItemProps>;
export default MenuItem;