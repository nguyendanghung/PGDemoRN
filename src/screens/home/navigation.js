import { Navigation } from "react-native-navigation"
import { TAB_TWO_SCREEN } from "../tab2/navigation";
import { TAB_THREE_SCREEN } from "../tab3/navigation";

const HOME_SCREEN = "src.home";

const homeScreen = (componentId, passProps) => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [{
                component: {
                  name: HOME_SCREEN,
                  passProps: {
                    text: 'This is tab 1'
                  }
                }
              }],
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: "Tab 1 header"
                  },
                  leftButtons: {
                    text: " erwe"
                  }
                },
                bottomTab: {
                  text: 'Tab 1',
                  testID: 'FIRST_TAB_BAR_BUTTON'
                }
              }
            }
          },
          {
            component: {
              name: TAB_TWO_SCREEN,
              passProps: {
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  testID: 'SECOND_TAB_BAR_BUTTON'
                },
                topBar: {
                  visible: true,
                  title: {
                    text: "Tab 2"
                  },
                }
              }
            }
          },
          {
            component: {
              name: TAB_THREE_SCREEN,
              passProps: {
                text: 'This is tab 3'
              },
              options: {
                bottomTab: {
                  text: 'Tab 3',
                  testID: 'THREE_TAB_BAR_BUTTON'
                },
                topBar: {
                  visible: true,
                  title: {
                    text: "Tab 3",
                    color: "red"
                  },
                }
              }
            }
          }
        ],
        options: {
          topBar: {
            visible: true,

          }
        }
      }
    }
  })
}

export { HOME_SCREEN, homeScreen }