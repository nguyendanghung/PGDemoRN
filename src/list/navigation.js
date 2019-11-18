import {Navigation} from "react-native-navigation"

const LIST_SCREEN = "src.list";

const listScreen = (componentId, passProps) => {

    Navigation.push(componentId, {
        component: {
            id: LIST_SCREEN,
            name: LIST_SCREEN,
            options: {
                topBar: {
                  title: {
                    text: 'List'
                  }
                }
              },
            passProps
        },
    })
}

export { LIST_SCREEN, listScreen}