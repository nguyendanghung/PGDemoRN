import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native"


export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(`Store data ${e}`);
    }
}

export const getStoreData = async (key) => {
    try {
        return await AsyncStorage.getItem(key)

    } catch (e) {
        console.log(`Get value storage ${e}`);

    }
}

export const removeStoreData = async (key) => {
    try {

        await AsyncStorage.removeItem(key)

    } catch (e) {
        console.log(`Remove value storage ${e}`);

    }

    console.log('Done.')
}

export const searchByListProp = (list, listProps, queryText) =>{

    return list.filter((item) => {
        if (listProps.find((prop) => {
            return item[prop] && item[prop].toLowerCase().indexOf(queryText.toLowerCase()) > -1
        })) {
            return true
        }

        return false;
    })
}
