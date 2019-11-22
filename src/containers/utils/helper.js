import AsyncStorage from "@react-native-community/async-storage";


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
        
    } catch(e) {
        console.log(`Get value storage ${e}`);
        
    }
}

export const removeStoreData = async (key) => {
    try {

      await AsyncStorage.removeItem(key)

    } catch(e) {
        console.log(`Remove value storage ${e}`);
        
    }
  
    console.log('Done.')
  }
