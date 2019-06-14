import React, { FunctionComponent } from "react";

interface LogoProps {
  isActive?: boolean;
  onClick?: () => void;
  size: "big" | "small";
}

export declare const Logo: FunctionComponent<LogoProps>;
export default Logo;
