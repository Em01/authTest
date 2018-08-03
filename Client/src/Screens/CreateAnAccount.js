import React, { Component } from 'react'

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Input from '../Components/Input/Input'
import CustomButton from '../Components/Button/Button';

class CreateAnAccount extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signUpForm}>
                    <Input placeholder="Email" />
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                </View>
                <CustomButton text="Sign Up" />
            </View>
        )
    }

}

export default CreateAnAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    signUpForm: {
        height: 250,
        justifyContent: 'space-around'
    }
})