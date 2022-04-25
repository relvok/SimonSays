import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {setPadsDisabled, setSimonSequence, setPads} from '../store/actions';
import {sequenceGenerator, delay} from './sequence';
import {playAudio} from './sounds';

export function useSequence(simonSequence, pads, sounds) {
  const dispatch = useDispatch();
  const newSequence = sequenceGenerator(simonSequence, pads);
  const playSequence = usePlaySequence(newSequence, pads, sounds);
  return () => {
    dispatch(setSimonSequence(newSequence));
    dispatch(setPadsDisabled(true));
    playSequence();
  };
}

//usePlaySequence hook
export function usePlaySequence(sequence, pads, sounds) {
  const dispatch = useDispatch();
  return async () => {
    for (let pad of sequence) {
      let newPads = [...pads];
      let padIndex = newPads.findIndex(p => p.name === pad.name);
      newPads[padIndex].isActive = true;
      dispatch(setPads(newPads));
      playAudio(sounds[padIndex]);
      await delay(300);
      newPads[padIndex].isActive = false;
      dispatch(setPads(newPads));
      await delay(300);
    }
    dispatch(setPadsDisabled(false));
  };
}
