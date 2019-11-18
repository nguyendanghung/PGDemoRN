// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation"
import { registerScreens } from "./src/Screen"
import { homeScreen } from "./src/home/navigation"

Navigation.events().registerAppLaunchedListener(() => {
    registerScreens()
    homeScreen()
})
