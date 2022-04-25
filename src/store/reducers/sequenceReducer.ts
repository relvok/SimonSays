import {SequenceState} from '../types';

//set root states
const initialState: SequenceState = {
  simonSequence: [],
  userSequence: [],
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
    case 'SET_USER_SEQUENCE':
      return {
        ...state,
        userSequence: payload,
      };

    default:
      return state;
  }
};
