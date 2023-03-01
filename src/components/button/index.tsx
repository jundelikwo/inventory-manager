import React from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

export interface ButtonProps {
  testID?: string;
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  icon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export function Button({
  text,
  testID,
  icon,
  onPress,
  disabled,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[styles.btn, style]}>
      {icon}
      {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : null}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  textSize: 14,
  textWeight: 'medium',
};

export default Button;
