import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useTheme from '../../../Hooks/useTheme';
import {SPACING} from '../../../Constants/Spacing/Spacing';
import Chevron from '../../../Assets/Svg/Chevron';
import {pop} from '../../../Helpers/NavigationHelper';

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = React.memo(() => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={() => pop()}>
      <Chevron size={1.4} />
    </TouchableOpacity>
  );
});

export default BackButton;

const useStyles = () => {
  const {COLORS} = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: SPACING.X12,
      height: SPACING.X12,
      borderRadius: SPACING.X12,
      backgroundColor: COLORS.white30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return {styles};
};
