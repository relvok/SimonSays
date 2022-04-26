import {PadArrayType} from 'components/types';

export const setUserName = (username: string) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const setPads = (pads: PadArrayType) => ({
  type: 'SET_PADS',
  payload: pads,
});

export const setSimonSequence = (sequence: PadArrayType) => ({
  type: 'SET_SIMON_SEQUENCE',
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
export const setResults = (results: Array<Object>) => ({
  type: 'SET_RESULTS',
  payload: results,
});

export const setSounds = (sounds: any) => ({
  type: 'SET_SOUNDS',
  payload: sounds,
});

export const setGameState = (gameState: Object) => ({
  type: 'SET_GAME_STATE',
  payload: gameState,
});
