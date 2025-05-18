import {createDrawerNavigator} from '@react-navigation/drawer';
import OkSurfHome from '../Screens/Home/OkSurfHome';
import {DrawerNavigatorScreenOptions} from '../Constants/Navigation/NavigationConfig';
import {SpaceFlightStackNavigation} from './SpaceFlightStackNavigation';

const Drawer = createDrawerNavigator();

export function AppDrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={DrawerNavigatorScreenOptions}>
      <Drawer.Screen name="OkSurf" component={OkSurfHome} />
      <Drawer.Screen
        name="SpaceFlight"
        component={SpaceFlightStackNavigation}
      />
    </Drawer.Navigator>
  );
}
