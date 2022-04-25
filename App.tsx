import 'react-native-gesture-handler';

import React, {StrictMode} from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './src/store';
import SimonNavigator from './src/navigation/RootStack';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    //strict
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <SimonNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

export default App;
