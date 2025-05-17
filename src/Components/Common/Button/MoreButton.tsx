import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useTheme from '../../../Hooks/useTheme';
import {SPACING} from '../../../Constants/Spacing/Spacing';
import More from '../../../Assets/Svg/More';

interface MoreButtonProps {
  onPress?: () => {};
}

const MoreButton: React.FC<MoreButtonProps> = React.memo(({onPress}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <More size={1} />
    </TouchableOpacity>
  );
});

export default MoreButton;

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
