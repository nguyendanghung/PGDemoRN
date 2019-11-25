import { LAUNCH_SCREEN } from "./launch/navigation";
import { StatusBar, View, SafeAreaView } from 'react-native'
import { Navigation } from "react-native-navigation"
import React from 'react'
import { HOME_SCREEN } from "./home/navigation";
import HomeScreen from "./home";
import { DETAILS_SCREEN } from "./details/navigation";
import DetailsScreen from "./details";
import { CREATE_COLORS_SCREEN } from "./createColors/navigation";
import CreateColorsScreen from "./createColors";
import { LOGIN_SCREEN } from "./login/navigation";
import LoginScreen from "./login";
import LaunchScreen from "./launch";
import { TAB_TWO_SCREEN } from "./tab2/navigation";
import TabTwoScreen from "./tab2";
import { TAB_THREE_SCREEN } from "./tab3/navigation";
import TabThreeScreen from "./tab3";

const Screens = new Map();

Screens.set(LAUNCH_SCREEN, LaunchScreen)
Screens.set(LOGIN_SCREEN, LoginScreen)

Screens.set(HOME_SCREEN, HomeScreen)
Screens.set(DETAILS_SCREEN, DetailsScreen)
Screens.set(CREATE_COLORS_SCREEN, CreateColorsScreen)
Screens.set(TAB_THREE_SCREEN, TabThreeScreen)

Screens.set(TAB_TWO_SCREEN, TabTwoScreen)


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