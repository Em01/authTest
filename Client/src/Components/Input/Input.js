import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

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
      width: '90%',
      height: '8%',
      backgroundColor: 'grey',
      borderRadius: 30,
      paddingLeft: '3%',
      color: 'black',
      fontSize: 10
    }
})