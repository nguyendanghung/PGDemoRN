import { View, TextInput, Button } from 'react-native';
import React, { Component } from 'react';
import { homeScreen } from '../home/navigation';
import { DEVICE_INFO, DEVICE_TOKEN } from "../../containers/constant"
import { postData, URL_LOGIN } from "../../containers/utils/api"
import { storeData } from "../../containers/utils/helper";

class LoginScreen extends Component {


  state = {
    user: '',
    pass: '',
    remember: false
  }
  _gotoHome = () => {
    homeScreen(this.props.componentId, { screenId: this.props.componentId });
  }

  _remember = () => {
    this.setState({
      remember: !this.state.remember
    })
  }

  _handledInput = (value) => {
    this.setState({ value })
  }

  _login = async () => {


    const { user, pass } = this.state

    let data = {
      device_info: DEVICE_INFO,
      device_token: DEVICE_TOKEN,
      email: user,
      password: pass,
      remember_me: this.state.remember ? 1 : 0
    }
    if (user && pass) {

      let result = await postData(URL_LOGIN, data)
      if (result.result) {

        await storeData('LOGIN_TOKEN', result.result.token)
        this._gotoHome()

      } else {
        alert("Invalid data")
      }

    } else {
      alert("Data # null")
    }
  }

  render() {

    return (
      <View>
        <View>

          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            value={this.state.user}
            onChangeText={(user) => this.setState({ user })}
          />

          <TextInput
            containerStyle={{ marginVertical: 20 }}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.pass}
            onChangeText={(pass) => this.setState({ pass })}
          />

          <Button
            title="Login"
            onPress={this._login}
          />

        </View>
      </View>
    )
  }
}

export default LoginScreen