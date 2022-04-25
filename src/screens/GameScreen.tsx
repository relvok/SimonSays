import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, SafeAreaView} from 'react-native';

import Board from '../components/Board';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from 'store';
import EndGameModal from 'components/EndGameModal';
import {createColorSounds} from 'utils/sounds';
import {setSounds} from 'store/actions';
import {RootState, AppDispatch} from 'store';
import Gradient from '../components/Gradient';
import styles from './styles';

const GameScreen = props => {
  const {modalVisible, pads} = useSelector((state: RootState) => state.ui);
  const {simonSequence} = useSelector((state: RootState) => state.sequence);
  const {score} = useSelector((state: RootState) => state.results);
  const {sounds} = useSelector((state: RootState) => state.audio);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const sounds = createColorSounds();
    dispatch(setSounds(sounds));
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.gameContainer}>
        <Gradient />
        <Text style={styles.gameTitle}>SIMON SAYS</Text>
        <Board
          simonSequence={simonSequence}
          pads={pads}
          score={score}
          sounds={sounds}
        />
        {modalVisible && (
          <EndGameModal
            testID="end-game-modal"
            modalVisible={modalVisible}
            navigation={props.navigation}
          />
        )}
      </SafeAreaView>
    </Provider>
  );
};

export default GameScreen;
