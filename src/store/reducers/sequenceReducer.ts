import {SequenceState} from '../types';

const initialState: SequenceState = {
  simonSequence: [],
};

export const sequenceReducer = (
  state: SequenceState = initialState,
  {type, payload}: any,
): SequenceState => {
  switch (type) {
    case 'SET_SIMON_SEQUENCE':
      return {
        ...state,
        simonSequence: payload,
      };

    default:
      return state;
  }
};
