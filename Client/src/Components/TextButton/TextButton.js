import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class TextButton extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity>
                <Text style={styles.textButton}>Create an Account</Text>
            </TouchableOpacity>
        )
    }
}



export default TextButton

const styles = StyleSheet.create({
    textButton: {
        color: 'grey',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'grey'
    }
})