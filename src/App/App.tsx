import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppStackNavigation} from '../Navigation/AppStackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../Helpers/NavigationHelper';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <AppStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
