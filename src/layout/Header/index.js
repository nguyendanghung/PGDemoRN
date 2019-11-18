import { View, Text } from 'react-native';
import React, {PureComponent} from 'react'


class HeaderComponent extends PureComponent {


    render() {
        const {title, ...props} = this.props
        return(
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}

export default HeaderComponent