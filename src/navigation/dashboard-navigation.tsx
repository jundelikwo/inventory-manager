import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import AddInventory from 'src/screens/dashboard/add-inventory';
import EditInventory from 'src/screens/dashboard/edit-inventory';
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
      <DashboardStack.Screen name="AddInventory" component={AddInventory} />
      <DashboardStack.Screen name="EditInventory" component={EditInventory} />
    </DashboardStack.Navigator>
  );
}

export default DashboardNavigation;
