import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Button, RefreshControl, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { getStoreData } from '../../containers/utils/helper';
import styles from "./styles"
import { postData, URL_GET_TRANSACTIONS } from "../../containers/utils/api";
import {stlGlobal} from "../../assets/styles/commom"

class TabTwoScreen extends Component {

    constructor (props) {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
            listDataTransactions: [],
            loading: true,
            isLoadMore: false,
            isRefesh: false
        }
        this.currentPage = 1
    }

    componentDidMount() {
        this._loadData(1)
    }

    _loadData = async (page) => {
        let getLoginToken = await getStoreData('LOGIN_TOKEN');
        console.log(getLoginToken);
        
        let params = {
            page: page,
            transaction_client_id: ["27109","24271"],
            token: getLoginToken
        }
        let result = await postData(URL_GET_TRANSACTIONS, params);

        if (result.result) {
            let dataTransactions = result.result.transactions;
            if (dataTransactions){
                let newData = this.state.listDataTransactions.concat(getDataClient)
                this.setState({ 
                    listDataTransactions: newData, 
                    loading: false, 
                    isLoadMore: false, 
                })
            } else {
                this.setState({
                    isLoadMore: false, 
                })
            }
            
        } else {
            alert("No data from server")
        }
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.eachItem}>
                <Text style={styles.id}>{item.date}</Text>
                <Text style={styles.name}>{item.description}</Text>
            </TouchableOpacity>

        )
    }

    _renderSeparator = () => {
        return (
          <View
            style={{
              height: 2,
              width: '100%',
              backgroundColor: '#CED0CE'
            }}
          />
        );
      };

    _renderFooter = () => {

         if (!this.state.isLoadMore) return null;
         return (
           <ActivityIndicator
            size="large"
             style={{ color: '#0000ff' }}
           />
         );
    };

    _handleRefesh = () => {
        console.log("reflesh");
        this.setState({isRefesh: true})
        this.currentPage = 1
        this._loadData(this.currentPage)
    }

    _handleLoadMore = () => {
        this.setState({isLoadMore: true})
        console.log("load more handle");
        
        if (this.state.isLoadMore) {
            this.currentPage++
            this._loadData(this.currentPage)
        }
    };

    render() {

        const { listDataTransactions, loading } = this.state

        return (
            <View style={styles.container}>
                <View>
                    {
                        loading ?
                            <ActivityIndicator size="large" color="#0000ff" />
                            :
                            <FlatList
                                data={listDataTransactions}
                                extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._renderItem}
                                numColumns={2}
                                onEndReachedThreshold={1}
                                onEndReached={this._handleLoadMore}
                                ListFooterComponent={this._renderFooter}
                                ListEmptyComponent={() => <Text style={{color: "red"}}>List is empty</Text>}
                                // refreshControl={
                                //     <RefreshControl
                                //       refreshing={this.state.isRefesh}
                                //       onRefresh={this._handleRefesh()}
                                //     />
                                // }
                            />
                    }
                </View>
            </View>
        )
    }
}

export default TabTwoScreen

