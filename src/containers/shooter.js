import React from 'react';
import {StyleSheet, View} from 'react-native';
import ShotCamera from '../components/shotCamera';

export default class ShooterContainer extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ShotCamera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
