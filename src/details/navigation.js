import {Navigation} from "react-native-navigation"

const DETAILS_SCREEN = "src.details";

const detailsScreen = (componentId, passProps) => 
    Navigation.push(componentId, {
        component: {
            id: DETAILS_SCREEN,
            name: DETAILS_SCREEN,
            options: {
                topBar: {
                  title: {
                    text: 'Details'
                  }
                }
            },
            passProps
        },
        
    })

export { DETAILS_SCREEN, detailsScreen }