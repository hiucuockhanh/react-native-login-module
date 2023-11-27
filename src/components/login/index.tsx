import React, { memo, useMemo } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useLogin } from './useLogin';

function LoginScreen(): JSX.Element {
  const { username, setUsername, password, setPassword, handleLogin } =
    useLogin();
  return useMemo(() => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <TextInput
            value={username as string}
            onChangeText={setUsername}
            placeholder="Enter your username"
            style={styles.input}
          />
          <TextInput
            value={password as string}
            onChangeText={setPassword}
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }, [handleLogin, password, setPassword, setUsername, username]);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 48,
    width: '80%',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  button: {
    marginTop: 40,
    width: '80%',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
});

export default memo(LoginScreen);
