import React, { FunctionComponent } from "react";

interface Link {
  url: string;
  title: string;
}

interface MobileMenuProps {
  links: Link[];
  userLinks: Link[];
  activeUrl: string;
  setActiveUrl: (val: string) => void;
  onCreateCoupon: () => void;
}

export declare const MobileMenu: FunctionComponent<MobileMenuProps>;
export default MobileMenu;
