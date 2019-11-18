import {Navigation} from "react-native-navigation"

const HOME_SCREEN = "src.home";

const homeScreen = (id, passProps) => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: 'dark'
    },
    topBar: {
      visible: true,
      title: {
        text: "Home"
      },
    }
  })
    Navigation.setRoot({
      root: {
        stack:{
          children:[
            {
              component: {
                  name: HOME_SCREEN,
                  passProps: {
                    text: 'This is tab 1',
                    title: "home"
                }
              },
            }
          ]
        }
      }
    })
}

export {HOME_SCREEN, homeScreen}