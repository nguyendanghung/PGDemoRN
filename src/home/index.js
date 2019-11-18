import { View, Text } from 'react-native';
import React, {Component} from 'react';
import { Input, Button } from "react-native-elements"
import { listScreen } from '../list/navigation';
import { createColorsScreen } from '../createColors/navigation';


class HomeScreen extends Component {



  _gotoList = () => {
    listScreen(this.props.componentId, {screenId: this.props.componentId});
  }

  _gotoCreateColors = () => {
    createColorsScreen(this.props.componentId, {screenId: this.props.componentId});
  }

  render() {


    return(
      <View>
        <View>
          <Input
              placeholder="User name"
          />
          <Input
              containerStyle={{marginTop: 20}}
              placeholder="Password"
              secureTextEntry={true}
          />
          <Button
              containerStyle={{marginTop: 20}}
              title="Login"
              onPress={this._gotoList}
          />

          <Button
              containerStyle={{marginTop: 20}}
              title="Goto Colors"
              onPress={this._gotoCreateColors}
          />
        </View>
      </View>
    )
  }
}

export default HomeScreen