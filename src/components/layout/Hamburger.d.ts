import React, { FunctionComponent } from "react";

interface HamburgerProps {
  onClick: () => void;
  isActive: boolean;
}

export declare const Hamburger: FunctionComponent<HamburgerProps>;
export default Hamburger;
