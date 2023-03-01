/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from 'src/context/auth';
import Navigation from 'src/navigation/navigation';
import InventoryProvider from 'src/context/inventory';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <InventoryProvider>
          <Navigation />
          <FlashMessage position="top" />
        </InventoryProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
