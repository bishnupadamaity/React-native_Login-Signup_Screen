/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

AppRegistry.registerComponent(appName, () => SignUp);
