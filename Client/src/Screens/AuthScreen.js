import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input from '../Components/Input/Input'

export default class App extends Component {

  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')}/>
        <Input placeholder="Username" />
        <Input placeholder="Password" secureTextEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white"
  }
});
