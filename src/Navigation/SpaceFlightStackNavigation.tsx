import {createStackNavigator} from '@react-navigation/stack';
import SpaceFlightHome from '../Screens/Home/SpaceFlightHome';
import NewsOverview from '../Screens/NewsOverview/NewsOverview';
import {AppStackNavigationParamList} from './@types/AppStackNavigationParamList';

const Stack = createStackNavigator<AppStackNavigationParamList>();

export function SpaceFlightStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SpaceFlightHome" component={SpaceFlightHome} />
      <Stack.Screen name="NewsOverview" component={NewsOverview} />
    </Stack.Navigator>
  );
}
