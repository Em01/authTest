import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class TextButton extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity {...this.props}>
                <Text style={styles.textButton}>{this.props.text}</Text>
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
        textDecorationColor: 'grey',
        fontSize: 17
    }
})