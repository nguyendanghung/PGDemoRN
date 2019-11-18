import {Navigation} from "react-native-navigation"

const CREATE_COLORS_SCREEN = "src.createColors";

const createColorsScreen = (componentId, passProps) => 
    Navigation.push(componentId, {
        component: {
            id: CREATE_COLORS_SCREEN,
            name: CREATE_COLORS_SCREEN,
            options: {
                topBar: {
                  title: {
                    text: 'Create Color'
                  }
                }
            },
            passProps
        },
        
    })

export { CREATE_COLORS_SCREEN, createColorsScreen }