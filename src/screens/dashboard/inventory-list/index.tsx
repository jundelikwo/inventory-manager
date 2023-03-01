import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from 'src/components/header';
import {PlusIcon} from 'src/components/icons';
import {useAuth} from 'src/context/auth';
import {useInventory} from 'src/context/inventory';
import {ScreenProp} from 'src/utilities/types';
import styles from './styles';

export function InventoryList({navigation}: ScreenProp) {
  const {logout} = useAuth();
  const {clearItems} = useInventory();

  const handleLogout = useCallback(() => {
    clearItems();
    logout();
  }, [clearItems, logout]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Inventory Listing"
        right={
          <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        }
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text>InventoryList</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('AddInventory')}
        style={styles.add}>
        <PlusIcon width={36} height={36} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default InventoryList;
