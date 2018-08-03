import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

class CustomButton extends Component {
    state = {}

    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: height * 0.08,
        width: 0.9 * width,
        backgroundColor: 'rgb(255, 82, 76)',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: 'white'
    }
})