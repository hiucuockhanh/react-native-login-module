import LoginScreen from './components/login';
import auth from './redux/auth';
import store from './redux/store';
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { LoginScreen, auth, store };
