import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from 'src/components/header';
import {useAuth} from 'src/context/auth';
import {ScreenProp} from 'src/utilities/types';
import styles from './styles';

export function InventoryList(_props: ScreenProp) {
  const {logout} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Inventory Listing"
        right={
          <TouchableOpacity activeOpacity={0.7} onPress={logout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        }
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text>InventoryList</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default InventoryList;
