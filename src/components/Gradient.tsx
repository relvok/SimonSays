import React from 'react';

import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Gradient = () => {
  return (
    <>
      <LinearGradient
        colors={['#FD8060', 'white']}
        style={styles.bottomGradient}
        start={{x: -1, y: 2}}
        end={{x: 0.3, y: 0.5}}></LinearGradient>
      <LinearGradient
        colors={['#FD8060', 'white']}
        style={styles.topGradient}
        start={{x: 2, y: -2}}
        end={{x: 0.6, y: 0.5}}></LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  topGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50%',
    backgroundColor: 'white',
    zIndex: -1,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    backgroundColor: 'white',
    zIndex: -1,
  },
});

export default Gradient;
