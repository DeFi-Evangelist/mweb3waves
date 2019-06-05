/// <reference types="react" />
import {
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  AlignSelfProps,
  FlexProps,
  OrderProps
} from "styled-system";

export declare type FlexContainerProps = FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps &
  FlexProps &
  OrderProps &
  AlignSelfProps;

declare const Flex: import("styled-components").StyledComponent<
  "div",
  any,
  import("styled-system").SpaceProps<import("react").ReactText> &
    import("styled-system").WidthProps<import("react").ReactText> &
    import("styled-system").HeightProps<import("react").ReactText> &
    import("styled-system").FontSizeProps<import("react").ReactText> &
    import("styled-system").ColorProps &
    import("styled-system").BackgroundProps<import("react").ReactText> &
    import("styled-system").PositionProps &
    import("styled-system").ZIndexProps &
    import("styled-system").TopProps<import("react").ReactText> &
    import("styled-system").LeftProps<import("react").ReactText> &
    import("styled-system").RightProps<import("react").ReactText> &
    import("styled-system").BottomProps<import("react").ReactText> &
    FlexProps<import("react").ReactText> &
    import("styled-system").DisplayProps &
    import("styled-system").FlexBasisProps<import("react").ReactText> &
    import("styled-system").MinWidthProps<import("react").ReactText> &
    import("styled-system").OverflowProps &
    FlexWrapProps &
    FlexDirectionProps &
    AlignItemsProps &
    JustifyContentProps &
    OrderProps &
    AlignSelfProps,
  never
>;

export default Flex;
