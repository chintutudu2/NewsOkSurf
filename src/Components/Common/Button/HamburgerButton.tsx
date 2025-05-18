import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useTheme from '../../../Hooks/useTheme';
import {SPACING} from '../../../Constants/Spacing/Spacing';
import {openDrawer} from '../../../Helpers/NavigationHelper';
import Hamburger from '../../../Assets/Svg/Hamburger';
import {COLOR_TYPE} from '../../../Constants/Colors/Color';

interface HamburgerButtonProps {
  bgColor?: COLOR_TYPE;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = React.memo(
  ({bgColor = 'white30'}) => {
    const {styles} = useStyles({bgColor});

    return (
      <TouchableOpacity style={styles.container} onPress={() => openDrawer()}>
        <Hamburger color="black" />
      </TouchableOpacity>
    );
  },
);

export default HamburgerButton;

const useStyles = ({bgColor}: {bgColor: COLOR_TYPE}) => {
  const {COLORS} = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: SPACING.X12,
      height: SPACING.X12,
      borderRadius: SPACING.X12,
      backgroundColor: COLORS[bgColor],
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return {styles};
};
