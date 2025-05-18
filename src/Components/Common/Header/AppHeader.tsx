import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SPACING} from '../../../Constants/Spacing/Spacing';
import BackButton from '../Button/BackButton';
import MoreButton from '../Button/MoreButton';
import HamburgerButton from '../Button/HamburgerButton';
import AppText from '../AppText/AppText';
import useTheme from '../../../Hooks/useTheme';

interface AppHeaderProps {
  isFloating?: boolean;
  hasMenu?: boolean;
  hasBack?: boolean;
  hasMore?: boolean;
  title?: string;
}

const AppHeader: React.FC<AppHeaderProps> = React.memo(
  ({isFloating = false, hasMenu, hasBack, hasMore, title}) => {
    const {styles} = useStyles({isFloating});

    return (
      <View style={[styles.container, styles.shadow]}>
        {hasMenu && <HamburgerButton bgColor="lightGray40" />}
        {hasBack && <BackButton />}
        {title && <AppText variant="title">{title}</AppText>}
        {hasMore ? <MoreButton /> : <View style={styles.rightEmptyContainer} />}
      </View>
    );
  },
);

export default AppHeader;

const useStyles = ({isFloating}: {isFloating: boolean}) => {
  const {COLORS} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 9,
      position: isFloating ? 'absolute' : 'relative',
      top: isFloating ? SPACING.X14 : 0,
      width: '100%',
      height: SPACING.X14,
      paddingHorizontal: SPACING.X4,
    },
    rightEmptyContainer: {
      width: SPACING.X12,
    },
    shadow: {
      backgroundColor: COLORS.white,
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      elevation: 5,
    },
  });
  return {styles};
};
