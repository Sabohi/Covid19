import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('LoginStore')
@observer
class LoginForm extends Component {
    onPressLogin = () => {
        this.props.LoginStore.username != '' && this.props.LoginStore.password != ''?
        this.props.navigation.navigate('Covid19',{
            username: this.props.LoginStore.username,
        }):alert('kindly fill username and pasword !!!')
    }
    
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar 
                barStyle="light-content"
                />
                <View>
                    <TextInput 
                    placeholder= "Username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    name="username"
                    value={this.props.LoginStore.username}
                    onChangeText={text => this.props.LoginStore.hanldeChange(text,'username')}
                    />
                    <TextInput 
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    name="password"
                    value={this.props.LoginStore.password}
                    onChangeText={text => this.props.LoginStore.hanldeChange(text,'password')}
                    />
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={this.onPressLogin}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#1E6A9E',
        paddingVertical: 10,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
       fontWeight: '100'
    }
});

export default LoginForm;