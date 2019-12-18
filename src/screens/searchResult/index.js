import { View, Text, Image, ScrollView } from 'react-native';
import React, {Component} from 'react';
import styles from "./styles"
import SelectOption from '../../components/SelectOption';
import { Input, Icon, Button } from 'react-native-elements';
import { common, colors } from '../../assets/styles';
import ItemSearchResult from '../../components/ItemSearchResult';


class SearchResultScreen extends Component {

    navigationButtonPressed = ({ buttonId }) => {
        const { componentId } = this.props;
        if (buttonId === 'back') {
          Navigation.pop(componentId);
        }
      }
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <View style={common.flexRowreverseCenter}>
                        <View style={{flex: 1}}>
                            <SelectOption placeholder='City'/>
                        </View>
                        <View style={[common.mr10, {flex: 2}]}>
                            <Input
                                placeholder='Search here...'
                                leftIcon={
                                    <Icon
                                    type='ionicon'
                                    name='ios-search'
                                    size={24}
                                    color='white'
                                    containerStyle={{backgroundColor: colors.Orange, height: 42,justifyContent: 'center', alignItems: 'center', width: 42, marginLeft: 0}}
                                    onPress={() => console.log('werw e')}
                                    />
                                }
                                underlineColorAndroid='transparent'
                                leftIconContainerStyle={{marginLeft: 0}}
                                inputStyle={common.inputStyle}
                                inputContainerStyle={common.inputContainerStyle}
                                containerStyle={{paddingHorizontal: 0, marginVertical: 5, overflow: 'hidden'}}
                            />
                        </View>
                    </View>
                    <View style={common.flexRowStart}>
                        <Button
                            title='Advanced Search?'
                            titleStyle={{color: colors.Orange, fontWeight: 'bold', fontSize: 20}}
                            type='clear'
                            buttonStyle={{}}

                        />
                    </View>
                    <SelectOption placeholder='Near by'/>
                    <View>

                        <View>
                            <ItemSearchResult/>
                            <ItemSearchResult/>
                            
                        </View>

                    </View>
                    
                </View>
                
            </View>
        )
    }
}



  
   

export default SearchResultScreen