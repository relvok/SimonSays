import React from 'react';
import {createStore, Action} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {rootReducer} from 'store/reducers';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {render} from '@testing-library/react-native';

// Persist configuration
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['results'],
};

// Create root reducer persistor
const persistedReducer = persistReducer<any, any>(
  rootPersistConfig,
  rootReducer,
);
export type RootState = ReturnType<typeof store.getState>;

const store = createStore(persistedReducer);
let persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;

export {store, persistor};

export function renderWithRedux(ui: React.ReactElement) {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {ui}
      </PersistGate>
    </Provider>,
  );
}
