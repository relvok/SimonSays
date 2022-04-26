import {GameState} from 'store/types';

//export SimonSequenceType
export type PadArrayType = Array<PadType> | any;

export interface StartButtonProps {
  simonSequence: PadArrayType;
  pads: PadArrayType;
  sounds: Array<Object>;
  setGameState: (gameState: GameState) => void;
  gameState: GameState;
  playSequence: any;
}

export interface BoardProps {
  simonSequence: PadArrayType;
  pads: PadArrayType;
  sounds: Array<Object>;
  highScore: number;
  score: number;
}

export interface PadType {
  name: string;
  value: string;
  isActive: boolean;
  percent: string;
}

export interface PadProps {
  pad: PadType;
  onPadClickHandler: any;
  gameState: GameState;
}

export interface ModalProps {
  navigation: any;
  gameState: GameState;
}

export interface ResultItemProps {
  score: number;
  username: string;
}
