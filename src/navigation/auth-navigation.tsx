import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import Login from 'src/screens/auth/login';

const AuthStack = createStackNavigator();

// Usually there will be several authentication screens
// For this app having a separate AuthStack containing just the Login screen
// Is an overkill, but I still created it to separate it from the dashboard screens
export function AuthNavigation() {
  return (
    <AuthStack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      })}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigation;
