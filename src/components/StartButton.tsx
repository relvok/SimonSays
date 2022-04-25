import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {StartButtonProps} from './types';
import styles from './styles';

const StartButton = ({
  sounds,
  pads,
  simonSequence,
  setGameState,
  gameState,
  playSequence,
}: StartButtonProps) => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onClickHandler = async () => {
    dispatch(setGameState({started: true, turn: 'simon', gameOver: false}));
    setDisabled(true);
    await playSequence(simonSequence, pads, sounds);
  };

  return (
    <View style={styles.startContainer}>
      <TouchableOpacity
        testID="start-button"
        activeOpacity={1}
        disabled={!gameState.started && !gameState.gameOver}
        style={styles.startButton}
        onPress={() => onClickHandler()}>
        <Text style={styles.startText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartButton;
