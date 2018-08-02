import React, { Component } from 'react'
import { TextInput, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

class Input extends Component {
    state = {}

    render() {
        return (
            <TextInput style={styles.textInput} {...this.props} />

        )
    }
}


export default Input


const styles = StyleSheet.create({
    textInput: {
      width: 0.9 * width,
      height: 0.08 * height,
      backgroundColor: 'grey',
      borderRadius: 30,
      paddingLeft: '3%',
      color: 'black',
      fontSize: 10
    }
})