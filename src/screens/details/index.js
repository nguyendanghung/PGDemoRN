import { View, Text, Image } from 'react-native';
import React, { Component } from 'react'

import styles from "./styles"

class DetailsScreen extends Component {

    render() {

        const { item } = this.props

        return (
            <View style={styles.detailWrap}>
                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.des}>{item.email}</Text>
                <Text style={styles.des}>{item.full_name}</Text>

            </View>
        )
    }
}

export default DetailsScreen