import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {GameState} from 'store/types';
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
  const dispatch = useDispatch<AppDispatch>();

  const onClickHandler = async () => {
    dispatch(setGameState(GameState.SIMON_PLAYING));
    await playSequence(simonSequence, pads, sounds);
  };

  return (
    <View style={styles.startContainer}>
      <TouchableOpacity
        testID="start-button"
        activeOpacity={1}
        disabled={gameState != GameState.START}
        style={styles.startButton}
        onPress={() => onClickHandler()}>
        <Text style={styles.startText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartButton;
