import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input from '../Components/Input/Input'
import CustomButton from '../Components/Button/Button'
import TextButton from '../Components/TextButton/TextButton'
export default class App extends Component {

  static navigatorStyle = {
    navBarHidden: true
  }

  state = {
    username: '',
    password: ''
  }

  handlePushScreen = () => {
    this.props.navigator.push({
      screen: 'Client.CreateAnAccount',
      title: 'Sign Up'
    })
  }

  handleChangeUsername = test => {
    this.setState(() => {
      return {
        username: text
      }
    })
  }

  handleChangePassword = test => {
    this.setState(() => {
      return {
        password: text
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
        <View style={styles.formContainer}>
          <Input
            placeholder="Username"
            value={this.state.username}
            onChangeText={this.handleChangeUsername}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={this.handleChangePassword}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton text="Sign In"/>
          <TextButton onPress={this.handlePushScreen} text={"Sign Up"}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white"
  },

  formContainer: {
    height: 150,
    justifyContent: 'space-around'
  },

  image: {
    height: 100,
    width: 100,
    marginTop: '35%',
    marginBottom: '25%'
  },

  buttonContainer: {
    alignItems: 'center',
    height: 150,
    justifyContent: 'space-around'
  }
});
