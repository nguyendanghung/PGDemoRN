import { HOME_SCREEN } from "./home/navigation";
import HomeScreen from "./home";
import { StatusBar, View, SafeAreaView } from 'react-native'
import { Navigation } from "react-native-navigation"
import React from 'react'
import { LIST_SCREEN } from "./list/navigation";
import ListScreen from "./list";
import { DETAILS_SCREEN } from "./details/navigation";
import DetailsScreen from "./details";
import { CREATE_COLORS_SCREEN } from "./createColors/navigation";
import CreateColorsScreen from "./createColors";
import { LOGIN_SCREEN } from "./login/navigation";
import LoginScreen from "./login";

const Screens = new Map();

Screens.set(HOME_SCREEN, HomeScreen)
Screens.set(LOGIN_SCREEN, LoginScreen)

Screens.set(LIST_SCREEN, ListScreen)
Screens.set(DETAILS_SCREEN, DetailsScreen)
Screens.set(CREATE_COLORS_SCREEN, CreateColorsScreen)



const ComponentContainer = (Component) => {
    return function inject(props) {
        const WrapComponent = () => (
            <SafeAreaView>
                <Component {...props}/>
            </SafeAreaView>
        );
        return <WrapComponent/>;
    }
    
}

export const registerScreens = () =>{
    Screens.forEach( (ScreenComponent, key) =>
        Navigation.registerComponent(key, () => ComponentContainer(ScreenComponent))
    );
};