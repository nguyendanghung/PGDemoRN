import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Button, Alert, TextInput } from 'react-native';
import React, { Component } from 'react';
import { data } from "../../assets/data";
import { detailsScreen } from '../details/navigation';
import { Navigation } from 'react-native-navigation';
import { removeStoreData, getStoreData } from '../../containers/utils/helper';
import { launchScreen } from '../launch/navigation';
import styles from "./styles"
import { postData, URL_GET_LIST_CLIENT } from "../../containers/utils/api";


class HomeScreen extends Component {

    constructor (props) {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
            listDataClient: [],
            loadingClient: true,
            queryText: ''
        }
        this.arrSearch = []
    }

    componentDidMount() {
        this._loadData()
    }

    _loadData = async () => {

        let getLoginToken = await getStoreData('LOGIN_TOKEN');

        let params = {
            token: getLoginToken
        }
        let result = await postData(URL_GET_LIST_CLIENT, params);
        if (result.result.clients) {
            let getDataClient = result.result.clients;
            let sliceData = getDataClient.slice(0, 21)
            this.setState({ listDataClient: sliceData, loadingClient: false })
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

    _searchClient = (queryText) => {
        console.log(queryText);
        let queryResult = [];

        this.state.listDataClient.forEach(function (client) {
            if (client.full_name.toLowerCase().indexOf(queryText) != -1)
                queryResult.push(client);
        });
        console.log(queryResult);

    }

    search = text => {
        console.log(text);
    };

    clear = () => {
        this.search.clear();
    };

    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.arrSearch.filter(function (item) {
            //applying filter for the inserted text in search bar
            console.log(item);
            const itemData = item.full_name ? item.full_name.toLowerCase() : ''.toLowerCase();
            const textData = text.toLowerCase();
            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            listDataClient: newData,
            queryText: text,
        });
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
        this.state.listDataClient.push(data)

        return (
            <View style={styles.container}>
                <Button title="Log out" onPress={this._logOut} />

                <TextInput
                    placeholder="Search..."
                    value={queryText}
                    onChangeText={(queryText) => this.SearchFilterFunction(queryText)}
                />
                <Button title="Search" onPress={this._searchClient} />

                {
                    loadingClient ?
                        <ActivityIndicator size="large" color="#0000ff" />
                        :
                        <FlatList
                            data={listDataClient}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            enableEmptySections={true}
                        />
                }


            </View>
        )
    }
}

export default HomeScreen

