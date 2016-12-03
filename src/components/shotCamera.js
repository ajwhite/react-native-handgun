import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import Crosshair from './crosshair';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

export default class ShotCamera extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} />
        <Crosshair style={styles.crosshair} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  crosshair: {
    position: 'absolute',
    top: (SCREEN_HEIGHT - 100) / 2,
    left: (SCREEN_WIDTH - 100) / 2
  }
});
