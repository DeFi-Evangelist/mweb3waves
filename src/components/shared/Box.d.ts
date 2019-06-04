import {
  BackgroundProps,
  ColorProps,
  DisplayProps,
  FontSizeProps,
  HeightProps,
  SpaceProps,
  WidthProps,
  PositionProps,
  ZIndexProps,
  TopProps,
  LeftProps,
  RightProps,
  BottomProps,
  FlexProps,
  FlexBasisProps,
  MinWidthProps,
  OverflowProps
} from "styled-system";

export declare type BoxProps = SpaceProps &
  WidthProps &
  HeightProps &
  FontSizeProps &
  ColorProps &
  BackgroundProps &
  PositionProps &
  ZIndexProps &
  TopProps &
  LeftProps &
  RightProps &
  BottomProps &
  FlexProps &
  DisplayProps &
  FlexBasisProps &
  MinWidthProps &
  OverflowProps;

declare const Box: import("styled-components").StyledComponent<
  "div",
  any,
  BoxProps,
  never
>;

export default Box;
