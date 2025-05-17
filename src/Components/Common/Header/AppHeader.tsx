import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SPACING} from '../../../Constants/Spacing/Spacing';
import BackButton from '../Button/BackButton';
import MoreButton from '../Button/MoreButton';

interface AppHeaderProps {
  isFloating?: boolean;
  hasBack?: boolean;
  hasMore?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = React.memo(
  ({isFloating = false, hasBack, hasMore}) => {
    const {styles} = useStyles({isFloating});

    return (
      <View style={styles.container}>
        {hasBack && <BackButton />}
        {hasMore && <MoreButton />}
      </View>
    );
  },
);

export default AppHeader;

const useStyles = ({isFloating}: {isFloating: boolean}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      zIndex: 9,
      position: isFloating ? 'absolute' : 'relative',
      top: SPACING.X14,
      width: '100%',
      height: SPACING.X14,
      paddingHorizontal: SPACING.X4,
    },
  });
  return {styles};
};
