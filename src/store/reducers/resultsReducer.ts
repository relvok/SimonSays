import {ResultsState} from '../types';

const initialState: ResultsState = {
  results: [],
  score: 0,
  highScore: 0,
  username: '',
};

export const resultsReducer = (
  state: ResultsState = initialState,
  {type, payload}: any,
): ResultsState => {
  switch (type) {
    case 'SET_SCORE':
      return {
        ...state,
        score: payload,
      };
    case 'SET_HIGH_SCORE':
      return {
        ...state,
        highScore: payload,
      };
    case 'SET_RESULTS':
      return {
        ...state,
        results: payload,
      };

    case 'SET_USERNAME':
      return {
        ...state,
        username: payload,
      };

    default:
      return state;
  }
};
