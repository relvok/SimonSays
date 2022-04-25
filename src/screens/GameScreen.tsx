import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {RootState, AppDispatch, store} from 'store';
import {setSounds, setGameState} from 'store/actions';
import styles from './styles';
import Board from '../components/Board';
import Gradient from '../components/Gradient';
import EndGameModal from 'components/EndGameModal';
import {createColorSounds} from 'utils/sounds';

const GameScreen = (props: any) => {
  const {modalVisible, pads, gameState} = useSelector(
    (state: RootState) => state.ui,
  );
  const {simonSequence} = useSelector((state: RootState) => state.sequence);
  const {score} = useSelector((state: RootState) => state.results);
  const {sounds} = useSelector((state: RootState) => state.audio);

  const dispatch = useDispatch();
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
        {!gameState.gameOver && (
          <EndGameModal gameState={gameState} navigation={props.navigation} />
        )}
      </SafeAreaView>
    </Provider>
  );
};

export default GameScreen;
