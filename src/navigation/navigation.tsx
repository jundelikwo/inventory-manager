import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import AuthNavigation from './auth-navigation';
import DashboardNavigation from './dashboard-navigation';

const Stack = createStackNavigator();

export function Navigation() {
  const [initialRouteName, setInitialRouteName] = useState('');

  useEffect(() => {
    (async () => {
      const userValue = await AsyncStorage.getItem('user');

      setInitialRouteName(userValue ? 'DashboardNavigation' : 'AuthNavigation');
    })();
  }, []);

  return !initialRouteName ? null : (
    <Stack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      })}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      <Stack.Screen
        name="DashboardNavigation"
        component={DashboardNavigation}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
