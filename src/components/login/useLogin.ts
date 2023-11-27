import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    if (username === 'User' && password === '123456') {
      console.log('Username: ' + username);
      console.log('Password: ' + password);
      dispatch(login(username));
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  };
};
