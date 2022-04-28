import {PadType, PadArrayType} from 'components/types';

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Adds a new random pad to the Simon sequence.
export function sequenceGenerator(
  simonSequence: PadArrayType,
  pads: PadArrayType,
) {
  let choice: number = Math.floor(Math.random() * pads.length);
  let sequence = [...simonSequence, pads[choice]];
  return sequence;
}

// Compares user pad click to Simon sequence.
export function checkSequence(
  pad: PadType,
  score: number,
  simonSequence: PadArrayType,
) {
  if (pad.name === simonSequence[score].name) {
    return true;
  } else {
    return false;
  }
}
