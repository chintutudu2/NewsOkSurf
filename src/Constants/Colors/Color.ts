export const lightThemeColors = {
  white: '#FFFFFF',
  white30: '#FFFFFF4D',
  black: '#000000',
  black60: '#00000099',
  black0: '#00000000',

  lightGray40: '#D3D3D366',

  outline: '#6F797A',

  blue: '#0D92F4',

  transparent: 'transparent',
};

type Themes = 'light';

export type COLOR_TYPE = keyof typeof lightThemeColors;

export const palette: Record<Themes, typeof lightThemeColors> = {
  light: lightThemeColors,
};

export default palette;
