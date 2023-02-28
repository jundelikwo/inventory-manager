import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import InventoryList from 'src/screens/dashboard/inventory-list';

const DashboardStack = createStackNavigator();

export function DashboardNavigation() {
  return (
    <DashboardStack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      })}
      initialRouteName="InventoryList">
      <DashboardStack.Screen name="InventoryList" component={InventoryList} />
    </DashboardStack.Navigator>
  );
}

export default DashboardNavigation;
