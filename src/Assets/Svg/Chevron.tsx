import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {IconProps} from './@types/SvgType';

const Chevron = ({color = '#FFFFFF', size = 1, ...props}: IconProps) => (
  <Svg
    fill={color}
    width={24 * size}
    height={24 * size}
    viewBox="0 0 24 24"
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />

    <Path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
  </Svg>
);

export default Chevron;
