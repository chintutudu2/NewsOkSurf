import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './@types/SvgType';

const Hamburger = ({color = '#FFFFFF', size = 1, ...props}: IconProps) => (
  <Svg
    width={24 * size}
    height={24 * size}
    viewBox="0 0 24 24"
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 18L20 18"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
    />
    <Path
      d="M4 12L20 12"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
    />
    <Path
      d="M4 6L20 6"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

export default Hamburger;
