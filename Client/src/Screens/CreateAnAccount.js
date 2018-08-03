import Validator from 'validator'
import React, { Component } from 'react'

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Input from '../Components/Input/Input'
import CustomButton from '../Components/Button/Button';

class CreateAnAccount extends Component {

    state = {
        email: '',
        password: '',
        username: ''
    }

    handleEmailChange = email => this.setState({ email })
    handlePasswordChange = password => this.setState({ password })
    handleUsernameChange = username => this.setState({ username })

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signUpForm}>
                    <Input placeholder="Email" value={this.state.email} onChangeText={this.handleEmailChange} />
                    <Input placeholder="Username" value={this.state.username} onChangeText={this.handleUsernameChange}/>
                    <Input placeholder="Password" value={this.state.password} onChangeText={this.handlePasswordChange}/>
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