import { LAUNCH_SCREEN } from "./launch/navigation";
import { StatusBar, View, SafeAreaView } from 'react-native'
import { Navigation } from "react-native-navigation"
import React from 'react'
import LaunchScreen from "./launch";
import { SEARCH_RESULT_SCREEN } from "./searchResult/navigation";
import SearchResultScreen from "./searchResult";

const Screens = new Map();

Screens.set(LAUNCH_SCREEN, LaunchScreen)

Screens.set(SEARCH_RESULT_SCREEN, SearchResultScreen)



const ComponentContainer = (Component) => {
    return function inject(props) {
        const WrapComponent = () => (
            <SafeAreaView>
                <Component {...props} />
            </SafeAreaView>
        );
        return <WrapComponent />;
    }

}

export const registerScreens = () => {
    Screens.forEach((ScreenComponent, key) =>
        Navigation.registerComponent(key, () => ComponentContainer(ScreenComponent))
    );
};