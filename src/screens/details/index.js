import { View, Text, Image } from 'react-native';
import React, {Component} from 'react'

import styles from "./styles"

class DetailsScreen extends Component {

    render() {
        
        const { item } = this.props

        return(
            <View style={styles.detailWrap}>
                <Text style={styles.title}>{item.id}.{item.title}</Text>
                <Image
                    style={{width: 200, height: 200}}
                    source={{uri: item.src}}
                />
                <Text style={styles.des}>{item.des}</Text>
            </View>
        )
    }
}

export default DetailsScreen