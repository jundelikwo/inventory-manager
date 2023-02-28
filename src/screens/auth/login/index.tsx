import React, {useCallback, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from 'src/components/button';
import Header from 'src/components/header';
import Input from 'src/components/input';
import {InputErrorType, ScreenProp} from 'src/utilities/types';
import {rEmail} from 'src/utilities/regex';
import styles from './styles';
import {useAuth} from 'src/context/auth';

export function Login(_props: ScreenProp) {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<InputErrorType>(new Map());

  const handleSubmit = useCallback(() => {
    const newError: InputErrorType = new Map();

    if (!email.length || !email.match(rEmail)) {
      newError.set('email', true);
    }

    if (!password.length) {
      newError.set('password', true);
    }

    if (newError.size) {
      setError(newError);
      return;
    }

    login(email, password);
  }, [email, password, login]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" />
      <KeyboardAwareScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input
            label="Email Address"
            placeholder="ofada@buyfood.ng"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            importantForAutofill="yes"
            value={email}
            onChangeText={text => {
              setEmail(text);
              setError(state => {
                if (!state.get('email')) {
                  return state;
                }
                const newState = new Map(state);
                newState.delete('email');
                return newState;
              });
            }}
            error={error.get('email')}
            message={email.length ? 'Please enter a valid email' : undefined}
          />
          <View style={styles.formTop}>
            <Input
              autoCapitalize="none"
              autoCompleteType="password"
              textContentType="password"
              label="Password"
              toggleVisibility
              secureTextEntry
              importantForAutofill="yes"
              value={password}
              onChangeText={text => {
                setPassword(text);
                setError(state => {
                  if (!state.get('password')) {
                    return state;
                  }
                  const newState = new Map(state);
                  newState.delete('password');
                  return newState;
                });
              }}
              error={error.get('password')}
            />
          </View>
          <Button text="Login" onPress={handleSubmit} style={styles.formTop} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Login;
