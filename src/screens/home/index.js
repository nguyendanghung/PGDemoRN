import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Button, Alert, TextInput } from 'react-native';
import React, { Component } from 'react';
import { data } from "../../assets/data";
import { detailsScreen } from '../details/navigation';
import { Navigation } from 'react-native-navigation';
import { removeStoreData, getStoreData, searchByListProp } from '../../containers/utils/helper';
import { launchScreen } from '../launch/navigation';
import styles from "./styles"
import { postData, URL_GET_LIST_CLIENT, URL_GET_TRANSACTIONS } from "../../containers/utils/api";
import {stlGlobal} from "../../assets/styles/commom"

class HomeScreen extends Component {

    constructor (props) {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
            listDataClient: [],
            loadingClient: true,
            queryText: '',
            isLoadMore: false
        }
        this.arrSearch = []
    }

    componentDidMount() {
        this._loadData();
    }

    _loadData = async () => {

        let getLoginToken = await getStoreData('LOGIN_TOKEN');
        console.log(getLoginToken);
        
        let params = {
            token: getLoginToken
        }
        let result = await postData(URL_GET_LIST_CLIENT, params);
        if (result.result.clients) {
            let getDataClient = result.result.clients;
            // because data is more i just get 50 data if get all in one time my app lag
            // let sliceData = getDataClient.slice(0, 50)
            this.setState({ 
                listDataClient: getDataClient, loadingClient: false 
            })
            this.arrSearch = sliceData
            
        } else {
            alert("No data from server")
        }
    }

    

    _gotoLaunch = () => {
        launchScreen(this.props.componentId, { screenId: this.props.componentId })
    }

    // navigationButtonPressed({ buttonId }) {
    //     if (buttonId === 'btnLogout') {
    //         removeStoreData('LOGIN_TOKEN');
    //         this._gotoLaunch()
    //     }
    // }

    _search = (text) =>{
        let queryResult = searchByListProp(this.arrSearch, ['id', 'first', 'last'], text)
        this.setState({listDataClient: queryResult, queryText: text})
    }

    _logOut = () => {

        Alert.alert(
            'Confirm Logout',
            'Do you want logout',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => { removeStoreData('LOGIN_TOKEN'); this._gotoLaunch(); } },
            ],
            { cancelable: false },
        );

    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.eachItem} onPress={() => this._gotoDetails(item)}>
                <Text style={styles.id}>{item.id}</Text>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.name}>{item.full_name}</Text>
            </TouchableOpacity>

        )
    }

    _gotoDetails = item => {
        detailsScreen(this.props.componentId, { screenId: this.props.componentId, item })
    }


    render() {

        const { listDataClient, loadingClient, queryText } = this.state

        return (
            <View style={styles.container}>
                <Button title="Log out" onPress={this._logOut} />

                <TextInput
                    style={stlGlobal.inputDefault}
                    placeholder="Search..."
                    value={queryText}
                    onChangeText={(queryText) => this._search(queryText)}
                />
                {/* <Button title="Search" onPress={this._searchClient} /> */}
                <View style={{height: 400}}>
                    {
                        loadingClient ?
                            <ActivityIndicator size="large" color="#0000ff" />
                            :
                            <FlatList
                                data={listDataClient}
                                renderItem={this._renderItem}
                                numColumns={2}
                                enableEmptySections={true}
                            />
                    }
                </View>
               


            </View>
        )
    }
}

export default HomeScreen

