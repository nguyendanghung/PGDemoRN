import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, {Component} from 'react';

import {data} from "../assets/data";
import { detailsScreen } from '../details/navigation';



class ListScreen extends Component {

    _renderItem = ({ item }) => {
        return(
            <TouchableOpacity onPress={() => this._gotoDetails(item)} style={styles.itemContainer}>
                <Text >{item.id}</Text>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }


    _gotoDetails = item => {
        detailsScreen(this.props.componentId, {screenId: this.props.componentId, item}) 
    }

    render() {
        return(
            <View>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default ListScreen


const styles = StyleSheet.create({
    itemContainer :{
        backgroundColor: "grey",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    }
})