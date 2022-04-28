import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {rootReducer} from './reducers';

// Persist configuration.
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['results'],
};

// Create root reducer persistor.
const persistedReducer = persistReducer<any, any>(
  rootPersistConfig,
  rootReducer,
);
export type RootState = ReturnType<typeof store.getState>;

// Create redux store with state persistence.
const store = createStore(persistedReducer);
let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export {store, persistor};
