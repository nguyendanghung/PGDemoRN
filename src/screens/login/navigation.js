import {Navigation} from "react-native-navigation"

const LOGIN_SCREEN = "src.login";

const loginScreen = (componentId, passProps) => 
    Navigation.push(componentId, {
        component: {
            id: LOGIN_SCREEN,
            name: LOGIN_SCREEN,
            options: {
                topBar: {
                  title: {
                    text: 'Login'
                  }
                }
            },
            passProps
        },
        
    })

export { LOGIN_SCREEN, loginScreen }