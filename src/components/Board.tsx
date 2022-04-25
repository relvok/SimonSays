import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Pad from './Pad';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {PadsProps} from './types';
import StartButton from './StartButton';
import {delay, checkSequence, sequenceGenerator} from 'utils/sequence';
import {
  setPads,
  setUserSequence,
  setModalVisible,
  setScore,
  setHighScore,
  setPadsDisabled,
  setSimonSequence,
  setShowStart,
} from 'store/actions';
import {playAudio, playError} from 'utils/sounds';

const Board = ({simonSequence, pads, score, sounds}: PadsProps) => {
  const dispatch = useDispatch();
  const {showStart, padsDisabled} = useSelector((state: RootState) => state.ui);
  const {userSequence} = useSelector((state: RootState) => state.sequence);

  useEffect(() => {
    setShowStart(true);
  }, []);

  const onPadClickHandler = async pad => {
    if (padsDisabled) return;

    let newUserSequence = [...userSequence, pad];
    const correct = checkSequence(newUserSequence, simonSequence);
    if (correct) {
      dispatch(setUserSequence(newUserSequence));
      playPad(pad, sounds, pads);
      if (newUserSequence.length === simonSequence.length) {
        dispatch(setScore(score + 1));
        dispatch(setUserSequence([]));
        await delay(1000);
        await playSequence(simonSequence, pads, sounds);
      }
    } else {
      dispatch(setHighScore(score));
      dispatch(setScore(0));
      playError(sounds[4]);
      dispatch(setPadsDisabled(true));
      dispatch(setModalVisible(true));
    }
  };

  const playSequence = async (sequence, pads, sounds) => {
    dispatch(setPadsDisabled(true));
    const newSequence = sequenceGenerator(sequence, pads);
    dispatch(setSimonSequence(newSequence));
    for (let pad of newSequence) {
      await playPad(pad, sounds, pads);
    }

    dispatch(setPadsDisabled(false));
  };

  const playPad = async (pad, sounds, pads) => {
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
      {showStart ? (
        <StartButton
          sounds={sounds}
          pads={pads}
          simonSequence={simonSequence}
          setShowStart={setShowStart}
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
            padsDisabled={padsDisabled}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  padRow: {
    flexDirection: 'row',
  },
  score: {
    fontSize: 20,
    position: 'absolute',
    zIndex: 2,
    color: 'grey',
  },
  textContainer: {
    position: 'absolute',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    width: 70,
    height: 70,
    elevation: 5,
  },
  padsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Board;
