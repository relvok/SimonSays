import {combineReducers} from 'redux';
import {uiReducer} from './uiReducer';
import {sequenceReducer} from './sequenceReducer';
import {resultsReducer} from './resultsReducer';
import {audioReducer} from './audioReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

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

// export type IRootState = ReturnType<typeof rootReducer>;
