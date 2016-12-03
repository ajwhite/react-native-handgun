import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Crosshair ({style}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.circle} />
      <View style={[styles.line, styles.verticalLine, styles.topLine]} />
      <View style={[styles.line, styles.horizontalLine, styles.rightLine]} />
      <View style={[styles.line, styles.verticalLine, styles.bottomLine]} />
      <View style={[styles.line, styles.horizontalLine, styles.leftLine]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 100,
    height: 100
  },
  circle: {
    position: 'absolute',
    width: 80,
    height: 80,
    top: 10,
    left: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 40
  },
  line: {
    backgroundColor: 'red',
    position: 'absolute'
  },
  verticalLine: {
    height: 30,
    width: 1
  },
  horizontalLine: {
    height: 1,
    width: 30
  },
  topLine: {
    top: 0,
    left: 50
  },
  bottomLine: {
    bottom: 0,
    left: 50
  },
  leftLine: {
    top: 50,
    left: 0
  },
  rightLine: {
    top: 50,
    right: 0
  }
});
