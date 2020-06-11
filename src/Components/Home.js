import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@inject('LoginStore')
@observer
class HomeScreen extends Component{
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome {this.props.LoginStore.username != ''?this.props.LoginStore.username:'User'}</Text>
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default HomeScreen;