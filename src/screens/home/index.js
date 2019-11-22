import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, {Component} from 'react';
import {data} from "../../assets/data";
import { detailsScreen } from '../details/navigation';
import { Navigation } from 'react-native-navigation';
import { removeStoreData, getStoreData } from '../../containers/utils/helper';
import { launchScreen } from '../launch/navigation';


class HomeScreen extends Component {
    
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    _gotoLaunch = () => {
        launchScreen(this.props.componentId, {screenId: this.props.componentId}) 
    }
    
    navigationButtonPressed({ buttonId }) {
        if(buttonId === 'btnLogout'){
            removeStoreData('LOGIN_TOKEN');
            this._gotoLaunch()
        }
    }

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

export default HomeScreen


const styles = StyleSheet.create({
    itemContainer :{
        backgroundColor: "grey",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    }
})