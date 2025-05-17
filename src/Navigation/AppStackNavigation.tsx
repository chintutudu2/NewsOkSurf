import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import NewsOverview from '../Screens/NewsOverview/NewsOverview';
import {AppStackNavigationParamList} from './@types/AppStackNavigationParamList';

const Stack = createStackNavigator<AppStackNavigationParamList>();

export function AppStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsOverview" component={NewsOverview} />
    </Stack.Navigator>
  );
}
