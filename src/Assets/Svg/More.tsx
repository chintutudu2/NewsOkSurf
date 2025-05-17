import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './@types/SvgType';

const More = ({color = '#FFFFFF', size = 1, ...props}: IconProps) => (
  <Svg
    width={24 * size}
    height={24 * size}
    viewBox="0 0 20 20"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}>
    <Path
      fill={color}
      fill-rule="evenodd"
      d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"
    />
  </Svg>
);

export default More;
