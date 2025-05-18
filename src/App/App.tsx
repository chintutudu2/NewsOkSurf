import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppStackNavigation} from '../Navigation/AppStackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../Helpers/NavigationHelper';
import {AppDrawerNavigation} from '../Navigation/AppDrawerNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {/* <AppStackNavigation /> */}
        <AppDrawerNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
