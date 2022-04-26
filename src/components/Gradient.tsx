import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Gradient = () => {
  return (
    <>
      <LinearGradient
        colors={['#FD8060', 'white']}
        style={styles.bottomGradient}
        start={{x: -2, y: 2}}
        end={{x: 0, y: 0.5}}></LinearGradient>
    </>
  );
};

export default Gradient;
