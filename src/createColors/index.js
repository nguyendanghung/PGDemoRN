import { View, Text, Image } from 'react-native';
import React, {Component, useState} from 'react';
import ColorChange from "../components/ColorChange";
import styles from "./styles"

const CreateColorsScreen = () => {


    const [red, setReds] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
        
    console.log(red);

    _decrease = (color) => {
        if (0 < color < 255){
            setReds(color - 1)
        } else{
            setReds(color)
        }
        
    }
    
    return(
        <View style={styles.detailWrap}>
            <Text style={styles.title}>Colors</Text>
            <ColorChange 
                Decrease={() => this._decrease(red)}
                Increase={() => setReds(red + 1)}  
                color="Red"/>
            <ColorChange color="Green"/>
            <ColorChange color="Blue"/>
            <View style={{width: 100, height: 100}}  />
        </View>
    )
}

export default CreateColorsScreen