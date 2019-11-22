import {Navigation} from "react-native-navigation"

const LAUNCH_SCREEN = "src.launch";

const launchScreen = (id, passProps) => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: 'dark'
    },
    topBar: {
      visible: true,
      title: {
        text: "Launch"
      },
    }
  })
    Navigation.setRoot({
      root: {
        stack:{
          children:[
            {
              component: {
                  name: LAUNCH_SCREEN,
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

export {LAUNCH_SCREEN, launchScreen}