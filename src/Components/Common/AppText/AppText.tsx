import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import TYPOGRAPHY, {TYPOGRAPHY_TYPE} from '../../../Constants/Fonts/Fonts';
import {COLOR_TYPE} from '../../../Constants/Colors/Color';
import useTheme from '../../../Hooks/useTheme';

interface AppTextProps extends TextProps {
  variant?: TYPOGRAPHY_TYPE;
  color?: COLOR_TYPE;
}

const AppText: React.FC<AppTextProps> = React.memo(
  ({variant = 'regular', color = 'black', children, style, ...props}) => {
    const {styles} = useStyles({color});

    return (
      <Text style={[styles.text, TYPOGRAPHY[variant], style]} {...props}>
        {children}
      </Text>
    );
  },
);

export default AppText;

const useStyles = ({color}: {color: COLOR_TYPE}) => {
  const {COLORS} = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: COLORS?.[color],
    },
  });
  return {styles};
};
