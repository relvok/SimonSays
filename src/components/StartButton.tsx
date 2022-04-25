import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StartProps} from './types';
import {RootState, AppDispatch} from '../store';
import {useSequence} from '../utils/hooks';

const StartButton = ({
  sounds,
  pads,
  simonSequence,
  setShowStart,
  playSequence,
}: StartProps) => {
  const [disabled, setDisabled] = useState(false); // change to redux state
  const dispatch = useDispatch<AppDispatch>();

  const onClickHandler = async () => {
    dispatch(setShowStart(false));
    setDisabled(true);
    await playSequence(simonSequence, pads, sounds);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        disabled={disabled}
        style={styles.button}
        onPress={() => onClickHandler()}>
        <Text style={styles.text}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 5,
    // transform: [{translateX: -35}, {translateY: -35}],
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    width: 70,
    height: 70,
    elevation: 5,
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'grey',
  },
});

export default StartButton;
