import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TYPOGRAPHY_TYPE} from '../../../Constants/Fonts/Fonts';
import {COLOR_TYPE} from '../../../Constants/Colors/Color';
import useTheme from '../../../Hooks/useTheme';
import AppText from '../AppText/AppText';
import {SPACING} from '../../../Constants/Spacing/Spacing';

interface ChipTagProps {
  text: string;
  variant?: TYPOGRAPHY_TYPE;
  color?: COLOR_TYPE;
  bgColor?: COLOR_TYPE;
}

const ChipTag: React.FC<ChipTagProps> = React.memo(
  ({text, variant = 'light', color = 'white', bgColor = 'blue'}) => {
    const {styles} = useStyles({bgColor});

    return (
      <View style={styles.container}>
        <AppText color={color} variant={variant}>
          {text}
        </AppText>
      </View>
    );
  },
);

export default ChipTag;

const useStyles = ({bgColor}: {bgColor: COLOR_TYPE}) => {
  const {COLORS} = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      backgroundColor: COLORS?.[bgColor],
      paddingHorizontal: SPACING.X3,
      paddingVertical: SPACING.X2,
      borderRadius: SPACING.X4,
    },
  });
  return {styles};
};
