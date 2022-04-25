import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

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

export default Gradient;
