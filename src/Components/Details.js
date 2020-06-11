import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Animated,
} from 'react-native';
import {inject, observer} from 'mobx-react';

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

@inject('DetailStore')
@observer
class DetailsScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  getDetails = () => {
    this.fadeIn();
    this.props.DetailStore.getDataApi();
  };

  clearDetails = () => {
    this.fadeOut();
    // this.props.DetailStore.updateData('', 'DATA');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.getDetails()}>
            <Text style={styles.buttonText}>GET API DATA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.clearDetails()}>
            <Text style={styles.buttonText}>CLEAR DATA</Text>
          </TouchableOpacity>
        </View>
        {/* <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
        {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        /> */}
        {this.props.DetailStore.loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Text />
        )}
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: this.state.fadeAnim, // Bind opacity to animated value
            },
          ]}>
          <FlatList
            data={this.props.DetailStore.DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1E6A9E',
    paddingVertical: 10,
    height: 50,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '100',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default DetailsScreen;
