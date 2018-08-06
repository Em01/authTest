import validator from 'validator'
import axios from 'axios'
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
    
    handleRegister = () => {
        const { email, password, username } = this.email
        if(validator.isEmail(email) && username.trim() && password.trim()) {
            axios.post('http://192.168.1.4:3000', {
                email,
                password,
                username
            })
            .then((response) => {
                if(response.status == 201) {
                    //go back
                    this.props.navigator.pop()
                }
            })
            .catch(() => {
                console.log('error')
            })
        } else {
            console.log('error')
        }
        console.log('pressed')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signUpForm}>
                    <Input placeholder="Email" value={this.state.email} onChangeText={this.handleEmailChange} />
                    <Input placeholder="Username" value={this.state.username} onChangeText={this.handleUsernameChange}/>
                    <Input placeholder="Password" value={this.state.password} onChangeText={this.handlePasswordChange} secureTextEntry/>
                </View>
                <CustomButton text="Sign Up" onPress={this.handleRegister} />
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