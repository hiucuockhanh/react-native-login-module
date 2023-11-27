// import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/auth';

// export const useLogin = () => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();
//   const [username, setUsername] = useState<string>();
//   const [password, setPassword] = useState<string>();

//   const handleLogin = () => {
//     if (username === 'User' && password === '123456') {
//       dispatch(login(username));
//       navigation.navigate('Home');
//     }
//   };

//   return {
//     username,
//     setUsername,
//     password,
//     setPassword,
//     handleLogin,
//   };
// };
