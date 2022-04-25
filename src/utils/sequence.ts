import {
  setPads,
  setSimonSequence,
  setScore,
  setPadsDisabled,
  setHighScore,
  setModalVisible,
} from '../store/actions';
import {playAudio, playError, createColorSounds} from '../utils/sounds';
const BRIGHTNESS_MULTIPLIER = 1.25;

type Pad = {
  name: string;
  value: string;
  percent: string;
  isActive: boolean;
};

// const sounds = createColorSounds();

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function sequenceGenerator(simonSequence, pads) {
  let choice: number = Math.floor(Math.random() * pads.length);
  let sequence = [...simonSequence];
  const newPad: Pad = pads[choice];
  sequence.push(newPad);
  return sequence;
}

export function checkSequence(userSequence, simonSequence) {
  console.log('checkSequence', userSequence, simonSequence);

  let correct = true;
  for (let i = 0; i < userSequence.length; i++) {
    if (
      userSequence &&
      simonSequence &&
      userSequence[i].name !== simonSequence[i].name
    ) {
      correct = false;
    }
  }
  return correct;
}
