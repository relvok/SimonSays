import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {
  setPads,
  setScore,
  setSimonSequence,
  setGameState,
  setHighScore,
} from 'store/actions';
import {GameState, SoundType, SoundArrayType} from 'store/types';
import {BoardProps, PadType, PadArrayType} from './types';
import styles from './styles';
import Pad from './Pad';
import StartButton from './StartButton';
import {delay, checkSequence, sequenceGenerator} from 'utils/sequence';
import {playAudio, playError} from 'utils/sounds';

const Board = ({simonSequence, pads, highScore, score, sounds}: BoardProps) => {
  const dispatch = useDispatch();
  const {gameState} = useSelector((state: RootState) => state.ui);

  const onPadClickHandler = async (pad: PadType) => {
    const correct = checkSequence(pad, score, simonSequence);
    const newScore = score + 1;
    dispatch(setScore(newScore));
    if (correct) {
      playPad(pad, sounds, pads);
      if (newScore === simonSequence.length) {
        dispatch(setHighScore(newScore));
        dispatch(setScore(0));
        await delay(1000);
        await playSequence(simonSequence, pads, sounds);
      }
    } else {
      playError(sounds[4] as SoundType);
      dispatch(setGameState(GameState.END));
    }
  };

  const playSequence = async (
    sequence: PadArrayType,
    pads: PadArrayType,
    sounds: SoundArrayType,
  ) => {
    dispatch(setGameState(GameState.SIMON_PLAYING));
    const newSequence = sequenceGenerator(sequence, pads);
    dispatch(setSimonSequence(newSequence));
    for (let pad of newSequence) {
      await playPad(pad, sounds, pads);
    }
    dispatch(setGameState(GameState.USER_PLAYING));
  };

  const playPad = async (
    pad: PadType,
    sounds: SoundArrayType,
    pads: PadArrayType,
  ) => {
    let newPads = [...pads];
    let padIndex = newPads.findIndex(p => p.name === pad.name);
    highlightPad(newPads, padIndex, true);
    playAudio(sounds[padIndex]);
    await delay(300);
    highlightPad(newPads, padIndex, false);
    await delay(500);
  };

  const highlightPad = (pads: PadArrayType, idx: number, active: boolean) => {
    pads[idx].isActive = active;
    dispatch(setPads(pads));
  };

  return (
    <View style={styles.container}>
      {gameState === GameState.START ? (
        <StartButton
          sounds={sounds}
          pads={pads}
          simonSequence={simonSequence}
          gameState={gameState}
          setGameState={setGameState}
          playSequence={playSequence}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.score}>{highScore}</Text>
        </View>
      )}
      <View style={styles.padsContainer}>
        {pads.map((pad: PadType, index: number) => (
          <Pad
            key={index}
            pad={pad}
            onPadClickHandler={onPadClickHandler}
            gameState={gameState}
          />
        ))}
      </View>
    </View>
  );
};

export default Board;
