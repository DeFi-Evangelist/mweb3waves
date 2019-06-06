import React, { FunctionComponent } from "react";

interface Link {
  url: string;
  title: string;
}

interface HeaderMenuProps {
  links: Link[];
  userLinks: Link[];
  activeUrl: string;
  setActiveUrl: (val: string) => void;
  onCreateCoupon: () => void;
  filterActive: boolean;
  onChangeFilterState: (val: boolean) => void;
}

export declare const HeaderMenu: FunctionComponent<HeaderMenuProps>;
export default HeaderMenu;
