import {AudioState} from '../types';

const initialState: AudioState = {
  sounds: [],
};

export const audioReducer = (
  state: AudioState = initialState,
  {type, payload}: any,
): AudioState => {
  switch (type) {
    case 'SET_SOUNDS':
      return {
        ...state,
        sounds: payload,
      };
    default:
      return state;
  }
};
