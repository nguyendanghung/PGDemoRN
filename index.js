// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation"
import { registerScreens } from "./src/screens/Screen"
import { launchScreen } from "./src/screens/launch/navigation"

Navigation.events().registerAppLaunchedListener( () => {
    registerScreens()
    launchScreen()
})
