import React, {useMemo, useRef, useState} from 'react';

import {
  View,
  TextInputProps,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TextInput,
  TouchableOpacity,
  Text,
  TextStyle,
} from 'react-native';
import styles from './styles';
import {EyeIcon, EyeOffIcon} from '../icons';
import {formatNumberInput} from 'src/utilities/formatter';
import Colors from 'src/utilities/colors';

export interface InputProps extends TextInputProps {
  editable?: boolean;
  disabled?: boolean;
  value?: string;
  label?: string;
  light?: boolean;
  money?: boolean;
  maxLength?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
  secondary?: boolean;
  toggleVisibility?: boolean;
  onChangeText?: (text: string) => void;
  infoPress?: () => void;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  focusStyle?: StyleProp<ViewStyle>;
  labelLines?: number;
  autoCompleteType?:
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'name'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username'
    | 'off'
    | undefined;
  contentStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  error?: boolean;
  message?: string;
  autoCorrect?: boolean;
  handleBlur?: () => void;
  handleFocus?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  labelIcon?: React.ReactNode;
}

export function Input(props: InputProps) {
  const inputRef = useRef<TextInput>(null);
  const inputProps = useMemo(() => {
    return {...props, left: undefined, right: undefined};
  }, [props]);
  const {editable = true, disabled = false} = props;

  const [isFocused, setIsFocused] = useState(false);
  const [hideVisibility, setHideVisibility] = useState(props.secureTextEntry);

  return (
    <View style={[props.containerStyle]}>
      {props.label ? (
        <View style={styles.labelView}>
          <Text numberOfLines={props.labelLines} style={styles.label}>
            {props.label}
          </Text>
          {props.labelIcon}
        </View>
      ) : null}
      <View
        style={[
          styles.content,
          props.light && styles.light,
          props.multiline && styles.multiLine,
          props.error && styles.error,
          isFocused && styles.focus,
          isFocused && props.focusStyle,
          props.contentStyle,
        ]}>
        {!editable || disabled ? (
          <View
            style={[
              styles.uneditable,
              styles.input,
              props.left || props.keyboardType === 'phone-pad'
                ? styles.hasLeft
                : null,
              props.right || props.toggleVisibility ? styles.hasRight : null,
              props.style,
            ]}>
            <Text>{props.value}</Text>
          </View>
        ) : (
          <TextInput
            ref={inputRef}
            {...inputProps}
            placeholderTextColor={
              props.error && !isFocused ? Colors.ROSE_05 : Colors.SLATE_05
            }
            secureTextEntry={hideVisibility}
            style={[
              styles.input,
              props.left || props.keyboardType === 'phone-pad'
                ? styles.hasLeft
                : null,
              props.right || props.toggleVisibility ? styles.hasRight : null,
              props.style,
            ]}
            onFocus={() => {
              props.handleFocus && props.handleFocus();
              setIsFocused(true);
            }}
            onBlur={() => {
              props.handleBlur && props.handleBlur();
              setIsFocused(false);
            }}
            onChangeText={text => {
              if (!props.onChangeText) {
                return;
              }

              if (props.money) {
                props.onChangeText(formatNumberInput(text, 2));
                return;
              }

              props.onChangeText(text);
            }}
          />
        )}
        {props.toggleVisibility ? (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.right}
            onPress={() => setHideVisibility(!hideVisibility)}>
            {hideVisibility ? (
              <EyeIcon width={16} height={16} />
            ) : (
              <EyeOffIcon width={16} height={16} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {props.error ? <Text style={styles.message}>{props.message}</Text> : null}
    </View>
  );
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  secureTextEntry: false,
  error: false,
  keyboardType: 'default',
  onChangeText: () => null,
  style: null,
  autoCompleteType: 'off',
  containerStyle: null,
  toggleVisibility: null,
  label: '',
  labelLines: 1,
  message: '** This field is required',
};

export default Input;
