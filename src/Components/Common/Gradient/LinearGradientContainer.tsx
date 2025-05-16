import {StyleSheet, ViewProps} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR_TYPE} from '../../../Constants/Colors/Color';
import useTheme from '../../../Hooks/useTheme';

interface LinearGradientContainerProps extends ViewProps {
  colors1?: COLOR_TYPE;
  colors2?: COLOR_TYPE;
}

const LinearGradientContainer: React.FC<LinearGradientContainerProps> =
  React.memo(
    ({colors1 = 'white', colors2 = 'black', children, style, ...props}) => {
      const {styles, COLORS} = useStyles();

      return (
        <LinearGradient
          colors={[COLORS[colors1], COLORS[colors2]]}
          style={[styles.container, style]}
          {...props}>
          {children}
        </LinearGradient>
      );
    },
  );

export default LinearGradientContainer;

const useStyles = () => {
  const {COLORS} = useTheme();

  const styles = StyleSheet.create({
    container: {},
  });
  return {styles, COLORS};
};
