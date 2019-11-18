import { View, Button, Text } from 'react-native';
import React from 'react'


const ColorChange = ({ color, Increase, Decrease }) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={Increase} title={`Tang ${color}`} />
            <Button onPress={Decrease} title={`Giam ${color}`} />
        </View>
    )
}

export default ColorChange