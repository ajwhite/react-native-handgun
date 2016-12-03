import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import Crosshair from './crosshair';
import Weapon from './weapon';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

export default class ShotCamera extends React.Component {
  state = {
    weaponTriggered: false
  };

  constructor (props) {
    super(props);
    this.shoot = this.shoot.bind(this);
  }

  shoot () {
    clearTimeout(this.weaponTriggeredTimeout);
    this.setState({weaponTriggered: true});
    this.weaponTriggeredTimeout = setTimeout(() => {
      this.setState({weaponTriggered: false});
    }, 100);
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.shoot}>
          <View style={styles.touchableSurface}>
            <Camera style={styles.camera} />
            <Crosshair style={styles.crosshair} />
            <Weapon
              style={styles.weapon}
              triggered={this.state.weaponTriggered}
            />
          </View>
        </TouchableWithoutFeedback>
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
  },
  weapon: {
    position: 'absolute',
    height: 300,
    width: 300,
    bottom: 0,
    right: 0
  },
  touchableSurface: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
