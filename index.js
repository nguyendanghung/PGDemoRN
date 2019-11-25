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
import { getStoreData } from "./src/containers/utils/helper"
import { homeScreen } from "./src/screens/home/navigation"

Navigation.events().registerAppLaunchedListener(async () => {
    let loginToken = await getStoreData('LOGIN_TOKEN')
    registerScreens()

    if (loginToken) {
        homeScreen()
    } else {
        launchScreen()
    }
})
