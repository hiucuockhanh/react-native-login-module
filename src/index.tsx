import React from 'react';
import { Provider } from 'react-redux';
import LoginScreen from './components/login';
import authSlice from './redux/authSlice';
import { store } from './redux/store';
function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

const LoginProvider = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};

export { LoginProvider, LoginScreen, authSlice, multiply, store };
