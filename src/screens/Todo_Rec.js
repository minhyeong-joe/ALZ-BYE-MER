import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

export default class Todo_Rec extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }

  static navigationOptions = {
    title: 'Todo/Recommendation',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    }
    
  };

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
  
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('TextInANest', () => TextInANest);