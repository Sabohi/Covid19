import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button
} from 'react-native';
import LoginForm from './LoginForm';
// import LoginStore from '../Stores/LoginStore';
import { observer, inject } from 'mobx-react';
//import stores from './../Stores/Stores';

@inject('LoginStore')
@observer
class LoginScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                    <Text>
                        {this.props.LoginStore.counter}
                    </Text>
                    <Button onPress= {() => this.props.LoginStore.increment()} title="Increment" />
                    <Button onPress= {() => this.props.LoginStore.decrement()} title="Decrement" />
                    <Image style={styles.logo} source={require('./../assets/Images/Octacat.png')}/>
                    <Text style={styles.title}>Covid19</Text>
              </View>
              <View style={styles.formContainer}>
                  <LoginForm navigation={this.props.navigation}/>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9
    }
});

export default LoginScreen;