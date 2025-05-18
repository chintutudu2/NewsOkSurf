import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {lightThemeColors} from '../Colors/Color';

// Screen Options for Drawer Navigator
export const DrawerNavigatorScreenOptions: DrawerNavigationOptions = {
  headerShown: false,
  swipeEnabled: false,
  drawerType: 'front',
  drawerStyle: {
    width: '60%',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  drawerActiveTintColor: lightThemeColors.outline,
};
