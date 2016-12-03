import React from 'react';
import {
  Animated,
  Image,
  View,
  StyleSheet
} from 'react-native';

const SCALE_START = 5;
const SCALE_END = 100;

export default class BlastParticles extends React.Component {
  state = {
    particles: []
  };
  constructor (props) {
    super(props);
    this.onParticleComplete = this.onParticleComplete.bind(this);
  }
  componentWillReceiveProps (nextProps) {
    if (!this.props.triggered && nextProps.triggered) {
      this.setState({
        particles: this.state.particles.concat(true)
      });
    }
  }
  onParticleComplete (index) {
    console.log('index', index)
    console.log('updating from', this.state.particles)
    console.log('updating to', [
      ...this.state.particles.slice(0, index),
      ...this.state.particles.slice(index + 1)
    ])
    this.setState({
      particles: [
        ...this.state.particles.slice(0, index),
        ...this.state.particles.slice(index + 1)
      ]
    });
  }
  render () {
    return (
      <View style={this.props.style}>
        {this.state.particles.map((particle, index) => (
          <Particle
            key={index}
            onComplete={() => this.onParticleComplete(index)}
          />
        ))}
      </View>
    );
  }
}

class Particle extends React.Component {
  state = {
    scale: new Animated.Value(SCALE_START)
  };
  componentDidMount () {
    Animated.timing(
      this.state.scale,
      {toValue: SCALE_END, duration: 200}
    ).start(() => this.props.onComplete());
  }
  render () {
    var position = this.state.scale.interpolate({
      inputRange: [SCALE_START, SCALE_END],
      outputRange: [0, 20]
    });
    var opacity = this.state.scale.interpolate({
      inputRange: [SCALE_START, SCALE_END - 20, SCALE_END - 10, SCALE_END],
      outputRange: [1, 1, 1, 1]
    });
    return (
      <Animated.Image
        style={{
          width: this.state.scale,
          height: this.state.scale,
          marginTop: position,
          marginLeft: position,
          opacity
        }}
        source={require('../assets/images/blast-particles-1.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  scaledContainer: {
    position: 'relative',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  particle: {
    // position: 'absolute',
    width: 20,
    height: 20,
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0
  }
});
