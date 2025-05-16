const lightThemeColors = {
  white: '#FFFFFF',
  black: '#000000',
  black60: '#00000099',
  black0: '#00000000',

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
