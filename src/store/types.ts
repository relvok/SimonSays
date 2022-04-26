import {PadArrayType} from 'components/types';
import Sound from 'react-native-sound';

export interface SequenceState {
  simonSequence: PadArrayType;
}
export type SoundType = {
  name: string;
  sound: Sound;
};

export type SoundArrayType = Array<SoundType> | any;

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

export interface AudioState {
  sounds: Array<SoundType>;
}

export enum GameState {
  START,
  SIMON_PLAYING,
  USER_PLAYING,
  END,
}
