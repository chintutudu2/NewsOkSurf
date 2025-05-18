export const FONT = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
};

export type FONT_TYPE = keyof typeof FONT;

const TYPOGRAPHY = {
  light: {
    fontFamily: FONT.light,
    fontSize: 12,
  },
  regular: {
    fontFamily: FONT.regular,
    fontSize: 14,
  },
  medium: {
    fontFamily: FONT.medium,
    fontSize: 14,
  },
  title: {
    fontFamily: FONT.medium,
    fontSize: 18,
  },
  titleLarge: {
    fontFamily: FONT.medium,
    fontSize: 26,
  },
};

export type TYPOGRAPHY_TYPE = keyof typeof TYPOGRAPHY;

export default TYPOGRAPHY;
