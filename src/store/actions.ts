import {Pad} from './types';

//create all actions for reducers

//set user's name
export const setUserName = (username: string) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const setPadsDisabled = (padsDisabled: boolean) => ({
  type: 'SET_PADS_DISABLED',
  payload: padsDisabled,
});

export const setPads = (pads: Pad[]) => ({
  type: 'SET_PADS',
  payload: pads,
});

export const setSimonSequence = (sequence: Pad[]) => ({
  type: 'SET_SIMON_SEQUENCE',
  payload: sequence,
});

export const setUserSequence = (sequence: Pad[]) => ({
  type: 'SET_USER_SEQUENCE',
  payload: sequence,
});

export const setScore = (score: number) => ({
  type: 'SET_SCORE',
  payload: score,
});

export const setHighScore = (highScore: number) => ({
  type: 'SET_HIGH_SCORE',
  payload: highScore,
});

export const setModalVisible = (modalVisible: boolean) => ({
  type: 'SET_MODAL_VISIBLE',
  payload: modalVisible,
});

export const setResults = (results: Array<Object>) => ({
  type: 'SET_RESULTS',
  payload: results,
});

export const setSounds = (sounds: any) => ({
  type: 'SET_SOUNDS',
  payload: sounds,
});

export const setShowStart = (showStart: boolean) => ({
  type: 'SET_SHOW_START',
  payload: showStart,
});

export const setGameState = (gameState: Object) => ({
  type: 'SET_GAME_STATE',
  payload: gameState,
});
