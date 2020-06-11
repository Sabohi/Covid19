import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import routes from './../Utility/Routes';
import {Provider} from 'mobx-react';
import stores from './../Stores/Stores';

class App extends Component {
  render(){
    return (
      <Provider {...stores}>
        <NavigationContainer>
          <routes.AppRoutes />
        </NavigationContainer>
      </Provider> 
    );
  }
}

export default App;