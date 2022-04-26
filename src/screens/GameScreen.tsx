import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {RootState, store} from 'store';
import {setSounds, setHighScore, setScore} from 'store/actions';
import {GameState} from 'store/types';
import styles from './styles';
import Board from '../components/Board';
import Gradient from '../components/Gradient';
import EndGameModal from 'components/EndGameModal';
import {createColorSounds} from 'utils/sounds';

const GameScreen = (props: any) => {
  const {pads, gameState} = useSelector((state: RootState) => state.ui);
  const {simonSequence} = useSelector((state: RootState) => state.sequence);
  const {score, highScore} = useSelector((state: RootState) => state.results);
  const {sounds} = useSelector((state: RootState) => state.audio);

  const dispatch = useDispatch();
  useEffect(() => {
    const sounds = createColorSounds();
    dispatch(setHighScore(0));
    dispatch(setScore(0));
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
          highScore={highScore}
          sounds={sounds}
        />
        {gameState === GameState.END && (
          <EndGameModal gameState={gameState} navigation={props.navigation} />
        )}
      </SafeAreaView>
    </Provider>
  );
};

export default GameScreen;
