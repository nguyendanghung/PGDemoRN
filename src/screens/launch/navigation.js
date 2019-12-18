import {Navigation} from "react-native-navigation"
import { colors } from "../../assets/styles";

const LAUNCH_SCREEN = "src.launch";

const launchScreen = (id, passProps) => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: 'light'
    },
    layout: {
      direction: 'rtl', // Supported directions are: 'rtl', 'ltr'
      backgroundColor: 'white',
      orientation: ['portrait', 'landscape'] // An array of supported orientations
    },
    
    topBar: {
      visible: true,
      title: {
        text: "Find a Tutor",
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      },
      background: {
        color: colors.Orange,
      },
      backButton: {
        visible: true,
        title: '',
        color: 'white',
        // icon: require('icon.png'),
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
                  },
                  options: {
                    topBar: {
                      rightButtons: [
                        {
                          id: 'search',
                          icon: require('../../assets/images/icon-more.png'),
                          
                        },
                      ],
                    }
                  }
              },
            }
          ]
        }
      }
    })
}

export {LAUNCH_SCREEN, launchScreen}