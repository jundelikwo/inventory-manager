import React, {useCallback} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from 'src/components/header';
import {PlusIcon} from 'src/components/icons';
import {useAuth} from 'src/context/auth';
import {useInventory} from 'src/context/inventory';
import {formatNumberInput} from 'src/utilities/formatter';
import {ScreenProp} from 'src/utilities/types';
import styles from './styles';

export function InventoryList({navigation}: ScreenProp) {
  const {logout} = useAuth();
  const {items, clearItems} = useInventory();

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
      <FlatList
        data={items}
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.uuid + index}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.7} style={styles.item}>
            <View style={styles.itemBody}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.stock}>Total Stock: {item.totalStock}</Text>
            </View>
            <Text numberOfLines={1} style={styles.price}>
              {formatNumberInput(item.price)}
            </Text>
          </TouchableOpacity>
        )}
      />
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
