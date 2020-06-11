import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './../Components/Home';
import DetailsScreen from './../Components/Details';
import SettingsScreen from './../Components/Settings';
const Drawer = createDrawerNavigator();
const CovidRoutes = () => {
    return(
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} /> 
          <Drawer.Screen name="Details" component={DetailsScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

export default CovidRoutes;