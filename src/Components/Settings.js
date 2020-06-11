import React from 'react';
import {
    View,
    Text,
    Button,
    Settings,
} from 'react-native';

function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details',{
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        /> */}
      </View>
    );
}

export default SettingsScreen;