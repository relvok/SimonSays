import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {
  setPads,
  setUserSequence,
  setModalVisible,
  setScore,
  setHighScore,
  setPadsDisabled,
  setSimonSequence,
  setShowStart,
  setGameState,
} from 'store/actions';
import {BoardProps, PadType} from './types';
import styles from './styles';
import Pad from './Pad';
import StartButton from './StartButton';
import {delay, checkSequence, sequenceGenerator} from 'utils/sequence';
import {playAudio, playError} from 'utils/sounds';

const Board = ({simonSequence, pads, score, sounds}: BoardProps) => {
  const dispatch = useDispatch();
  const {showStart, padsDisabled, gameState} = useSelector(
    (state: RootState) => state.ui,
  );
  const {userSequence} = useSelector((state: RootState) => state.sequence);

  useEffect(() => {
    setShowStart(true);
  }, []);

  const onPadClickHandler = async (pad: PadType) => {
    if (padsDisabled) return;

    let newUserSequence = [...userSequence, pad];
    const correct = checkSequence(newUserSequence, simonSequence);
    if (correct) {
      // correct pad click
      dispatch(setUserSequence(newUserSequence));
      playPad(pad, sounds, pads);
      if (newUserSequence.length === simonSequence.length) {
        //sequence complete
        dispatch(setScore(score + 1));
        dispatch(setUserSequence([]));
        await delay(1000);
        await playSequence(simonSequence, pads, sounds);
      }
    } else {
      // incorrect pad click
      // dispatch(setHighScore(score));
      playError(sounds[4]);
      dispatch(setGameState({isOn: false, turn: 'user', gameOver: true}));
    }
  };

  const playSequence = async (
    sequence: Array<Object>,
    pads: Array<PadType>,
    sounds: Array<Object>,
  ) => {
    dispatch(setGameState({isOn: true, turn: 'simon', gameOver: false}));
    const newSequence = sequenceGenerator(sequence, pads);
    dispatch(setSimonSequence(newSequence));
    for (let pad of newSequence) {
      await playPad(pad, sounds, pads);
    }
    dispatch(setGameState({isOn: true, turn: 'user', gameOver: false}));
  };

  const playPad = async (
    pad: PadType,
    sounds: Array<Object>,
    pads: Array<PadType>,
  ) => {
    let newPads = [...pads];
    let padIndex = newPads.findIndex(p => p.name === pad.name);
    newPads[padIndex].isActive = true;
    dispatch(setPads(newPads));
    playAudio(sounds[padIndex]);
    await delay(100);
    newPads[padIndex].isActive = false;
    dispatch(setPads(newPads));
    await delay(100);
  };

  return (
    <View style={styles.container}>
      {!gameState.started ? (
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
          <Text style={styles.score}>{score}</Text>
        </View>
      )}
      <View style={styles.padsContainer}>
        {pads.map((pad, index) => (
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
