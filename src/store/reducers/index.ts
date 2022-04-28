import AsyncStorage from '@react-native-async-storage/async-storage';

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {uiReducer} from './uiReducer';
import {sequenceReducer} from './sequenceReducer';
import {resultsReducer} from './resultsReducer';
import {audioReducer} from './audioReducer';

// Persist only results states reducer
const resultsPersistConfig = {
  key: 'results',
  storage: AsyncStorage,
  whitelist: ['results'],
};

export const rootReducer = combineReducers({
  ui: uiReducer,
  sequence: sequenceReducer,
  results: persistReducer(resultsPersistConfig, resultsReducer),
  audio: audioReducer,
});
