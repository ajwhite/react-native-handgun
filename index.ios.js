/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Shooter from './src/containers/shooter';

export default class FPSReload extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Shooter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('FPSReload', () => FPSReload);
