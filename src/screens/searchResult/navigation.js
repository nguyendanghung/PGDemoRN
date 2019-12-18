import {Navigation} from "react-native-navigation"

const SEARCH_RESULT_SCREEN = "src.searchResult";

const searchResultScreen = (componentId, passProps) => {

    Navigation.push(componentId, {
        component: {
            id: SEARCH_RESULT_SCREEN,
            name: SEARCH_RESULT_SCREEN,
            options: {
                topBar: {
                  title: {
                    text: 'Search Result'
                  },
                  leftButtons: [
                    {
                      id: 'back',
                      icon: require('../../assets/images/right-arrow.png'),
                      
                    },

                  ],
                  rightButtons: [
                    {
                      id: 'more',
                      icon: require('../../assets/images/icon-more.png'),
                    },
                    {
                      id: 'search',
                      icon: require('../../assets/images/search.png'),
                    },
                  ],
                },
                
            },
            passProps
        },
        
    })
}

export { SEARCH_RESULT_SCREEN, searchResultScreen }