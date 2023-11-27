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

function LoginScreen(): JSX.Element {
  return useMemo(() => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <TextInput
            value="username"
            // onChangeText={setUsername}
            placeholder="Enter your username"
            style={styles.input}
          />
          <TextInput
            value="password"
            // onChangeText={setPassword}
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }, []);
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
