import {Navigation} from "react-native-navigation"

const HOME_SCREEN = "src.home";

const homeScreen = (componentId, passProps) => {
  Navigation.setRoot({
    root: {
      stack:{
        children:[
          {
            component: {
              id: HOME_SCREEN,
              name: HOME_SCREEN,
              passProps: passProps,
              options: {
                topBar: {
                  title: {
                    text: 'Home'
                  },
                  rightButtons: [
                    {
                      id: 'btnLogout',
                      text: 'Logout'
                    }
                  ],
                }
              },
            },
          }
        ]
      }
    }
  })
}

export { HOME_SCREEN, homeScreen}