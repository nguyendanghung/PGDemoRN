import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import { homeScreen } from '../home/navigation';
import { createColorsScreen } from '../createColors/navigation';
import { loginScreen } from '../login/navigation';


class LaunchScreen extends Component {



  _gotoHome = () => {
    homeScreen(this.props.componentId, { screenId: this.props.componentId });
  }

  _gotoLogin = () => {
    loginScreen(this.props.componentId, { screenId: this.props.componentId });
  }

  _gotoCreateColors = () => {
    createColorsScreen(this.props.componentId, { screenId: this.props.componentId });
  }

  render() {


    return (
      <View>
        <View>
          <Button
            title="Login"
            onPress={this._gotoLogin}
          />

          <Button
            title="Goto Colors"
            onPress={this._gotoCreateColors}
          />
        </View>
      </View>
    )
  }
}

export default LaunchScreen