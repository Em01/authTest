import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input from '../Components/Input/Input'
import CustomButton from '../Components/Button/Button'
import TextButton from '../Components/TextButton/TextButton'
export default class App extends Component {

  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image}/>
        <View style={styles.formContainer}>
          <Input placeholder="Username" />
          <Input placeholder="Password" secureTextEntry />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton />
          <TextButton />
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
