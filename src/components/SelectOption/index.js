import { View, Text, Button, StyleSheet } from 'react-native';
import React, { PureComponent } from 'react';
import { Icon } from 'react-native-elements';
import Select from 'react-native-picker-select';

class SelectOption extends PureComponent {
    constructor(props){
        super(props)
    }
  render() {

    const {container, placeholder, ...props} = this.props
    return (
        <View style={[styles.container, container]}>
            <Select
                placeholder={{
                    label: placeholder,
                    value: null,
                    // color: 'red',
                }}
                Icon={() => {
                    return <Icon type='antdesign' size={18} name='caretdown' color="#b2b2b2" />;
                }}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
                textInputProps={{textAlign: 'right', underlineColorAndroid: 'transparent', color: '#676767', fontSize: 16}}
                style={{
                    ...styles.pickerSelectStyles,
                    iconContainer: {
                      color: '#b2b2b2'
                    },
                }}
            />
        </View>
        
    )
  }
}

export default SelectOption

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: '#b2b2b2',
        borderRadius: 5,
        padding: 10,
        height: 42,
        marginVertical: 5
    },
    pickerSelectStyles:{
        textAlign: 'right'
    }
})