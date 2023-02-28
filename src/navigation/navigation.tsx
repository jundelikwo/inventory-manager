import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import AuthNavigation from './auth-navigation';
import DashboardNavigation from './dashboard-navigation';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      })}
      initialRouteName="AuthNavigation">
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      <Stack.Screen
        name="DashboardNavigation"
        component={DashboardNavigation}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
