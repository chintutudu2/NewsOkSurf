import {createDrawerNavigator} from '@react-navigation/drawer';
import OkSurfHome from '../Screens/Home/OkSurfHome';
import SpaceFlightHome from '../Screens/Home/SpaceFlightHome';
import {DrawerNavigatorScreenOptions} from '../Constants/Navigation/NavigationConfig';

const Drawer = createDrawerNavigator();

export function AppDrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={DrawerNavigatorScreenOptions}>
      <Drawer.Screen name="OkSurf" component={OkSurfHome} />
      <Drawer.Screen name="SpaceFlight" component={SpaceFlightHome} />
    </Drawer.Navigator>
  );
}
