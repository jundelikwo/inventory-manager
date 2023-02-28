import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import AuthNavigation from './auth-navigation';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
        })}
        initialRouteName="AuthNavigation">
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
