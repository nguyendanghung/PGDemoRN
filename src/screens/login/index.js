import { View, Text } from 'react-native';
import React, {Component} from 'react';
import { Input, Button, CheckBox } from "react-native-elements"
import { listScreen } from '../list/navigation';
import { DEVICE_INFO, DEVICE_TOKEN } from "../../containers/constant"
import { postData} from "../../containers/utils/api"


class LoginScreen extends Component {


state = {
  user: '',
  pass: '',
  remember: false
}
  _gotoList = () => {
    listScreen(this.props.componentId, {screenId: this.props.componentId});
  }
  
  _remember = () => {
    this.setState({
      remember: !this.state.remember
    })
  }

  _handledInput = (value) =>{
    this.setState({value})
  }

  _login = () => {

    let data= {
      device_info: DEVICE_INFO,
      device_token: DEVICE_TOKEN,
      email: this.state.user,
      password: this.state.pass,
      remember_me: this.state.remember ? 1 : 0
    }
    let url = "auth/login/"

    postData( url, data).then((result) => {
      if(result.result) {
        listScreen(this.props.componentId, {screenId: this.props.componentId})
      }
      
    })

  }
  

  render() {

    

    return(
      <View>
        <View>

          <Input
            containerStyle={{marginTop: 20}}
            placeholder="User name"
            value={this.state.user}
            onChangeText={(user) => this.setState({user})}
          />
  <Text>{this.state.user}</Text>

          <Input
              containerStyle={{marginVertical: 20}}
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.pass}
              onChangeText={(pass) => this.setState({pass})}
          />
  <Text>{this.state.pass}</Text>

          <Button
            title={this.state.remember ? "Remember done" : "Remember me"}
            buttonStyle={{backgroundColor: this.state.remember ? "blue" : "green"}}
            onPress={this._remember}
          />
          
          <Button
              containerStyle={{marginTop: 20}}
              title="Login"
              onPress={this._login}
          />

        </View>
      </View>
    )
  }
}

export default LoginScreen