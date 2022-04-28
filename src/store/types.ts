import Sound from 'react-native-sound';

import {PadArrayType} from 'components/types';

// Control current gameState type.
export enum GameState {
  // Before user clicks start and after results screen back click.
  START,
  // While Simon is playing.
  SIMON_PLAYING,
  // While user is playing.
  USER_PLAYING,
  // After user lost and before results screen back click.
  END,
}

export interface SequenceState {
  simonSequence: PadArrayType;
}

export interface UiState {
  pads: PadArrayType;
  gameState: GameState;
}

export interface ResultsState {
  results: Array<Object>;
  highScore: number;
  score: number;
  username: string;
}

export type SoundType = {
  name: string;
  sound: Sound;
};

export type SoundArrayType = Array<SoundType> | any;

export interface AudioState {
  sounds: Array<SoundType>;
}
