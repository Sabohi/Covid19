import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../Components/Login';
import CovidScreen from './../Components/Covid';
const Stack = createStackNavigator();
const AppRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Covid19" component={CovidScreen} />
        </Stack.Navigator>
    );
}

export default AppRoutes;