import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from 'src/components/header';
import {ScreenProp} from 'src/utilities/types';
import styles from './styles';

export function InventoryList({navigation}: ScreenProp) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Inventory Listing" />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text>InventoryList</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default InventoryList;
