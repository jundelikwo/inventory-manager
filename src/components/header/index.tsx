import React from 'react';

import {Platform, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Colors from 'src/utilities/colors';
import {BackIcon} from '../icons';
import styles from './styles';

export interface HeaderProps {
  title: string;
  back?: boolean;
  onBackPress?: () => void;
  right?: React.ReactNode;
}

export function Header({title, back, right, onBackPress}: HeaderProps) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Colors.BLACK}
      />
      {back && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBackPress}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Text
        numberOfLines={1}
        style={[styles.title, right ? styles.titleLeft : null]}>
        {title}
      </Text>
      {right ? right : null}
      {!right && back ? <View style={styles.empty} /> : null}
    </View>
  );
}

export default Header;
