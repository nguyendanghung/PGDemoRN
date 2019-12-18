import { View, Text,  Picker, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { searchResultScreen } from '../searchResult/navigation';
import { common } from '../../assets/styles';
import styles from './styles';
import SelectOption from '../../components/SelectOption';
import { Input, Icon, Button } from 'react-native-elements';


class LaunchScreen extends Component {

  state = {
    language: ''
  }

  _gotoSearchResult = () => {
    searchResultScreen(this.props.componentId, { screenId: this.props.componentId });
  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.textTop}>Compare the best teacher and choose the most appropriate</Text>
        <View style={common.mb30}>
          <Text style={styles.title}>Here is best tutor in</Text>
          <View style={styles.listTutor}>
            <View style={styles.itemTutor}>
              <Text style={styles.Tutor}>Engineering</Text>
            </View>
            
            <View style={styles.itemTutor}>
              <Text style={styles.Tutor}>Law</Text>
            </View>
            <View style={styles.itemTutor}>
              <Text style={styles.Tutor}>Science</Text>
            </View>
            <View style={[styles.itemTutor, common.noBorder]}>
              <Text style={styles.Tutor}>Engineering</Text>
            </View>
            <View style={styles.itemTutor}>
              <Text style={styles.Tutor}>English</Text>
            </View>
            <View style={[styles.itemTutor, common.noBorder]}>
              <Text style={styles.Tutor}>Business</Text>
            </View>
          </View>
        </View>

        <SelectOption placeholder='Select City' />
        <Input
          placeholder='Search the course or test name'
          rightIcon={
            <Icon
              type='antdesign'
              name='close'
              size={24}
              color='#676767'
              onPress={() => console.log('werw e')}
            />
          }
          underlineColorAndroid='transparent'
          rightIconContainerStyle={{left: -7}}
          inputStyle={common.inputStyle}
          inputContainerStyle={common.inputContainerStyle}
          containerStyle={{paddingHorizontal: 0, marginVertical: 5}}
        />
        <View style={[common.flexRowEnd, common.mt10]}>
          <TouchableOpacity style={styles.btnClear} onPress={() => {}}>
            <Text style={styles.textBtnClear} >Advanced Search?</Text>
          </TouchableOpacity>
        </View>
        <Button
          title='Search'
          titleStyle={{fontWeight: 'bold'}}
          buttonStyle={[styles.btnAround, styles.btnOrange, styles.btnLarge]}
          containerStyle={styles.mt50}
          onPress={this._gotoSearchResult}
        />
       

      </View>
    )
  }
}

export default LaunchScreen