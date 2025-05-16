const lightThemeColors = {
  white: '#FFFFFF',
  black: '#000000',

  outline: '#6F797A',

  transparent: 'transparent',
};

type Themes = 'light';

export type COLOR_TYPE = keyof typeof lightThemeColors;

export const palette: Record<Themes, typeof lightThemeColors> = {
  light: lightThemeColors,
};

export default palette;
