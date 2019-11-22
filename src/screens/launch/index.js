import { View, Text } from 'react-native';
import React, {Component} from 'react';
import { Input, Button } from "react-native-elements"
import { homeScreen } from '../home/navigation';
import { createColorsScreen } from '../createColors/navigation';
import { loginScreen } from '../login/navigation';


class LaunchScreen extends Component {



  _gotoHome = () => {
    homeScreen(this.props.componentId, {screenId: this.props.componentId});
  }

  _gotoLogin = () => {
    loginScreen(this.props.componentId, {screenId: this.props.componentId});
  }

  _gotoCreateColors = () => {
    createColorsScreen(this.props.componentId, {screenId: this.props.componentId});
  }

  render() {


    return(
      <View>
        <View>
          <Button
              containerStyle={{marginTop: 20}}
              title="Login"
              onPress={this._gotoLogin}
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

export default LaunchScreen