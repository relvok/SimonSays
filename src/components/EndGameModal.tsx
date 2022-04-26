import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setUserName,
  setResults,
  setScore,
  setGameState,
  setHighScore,
  setSimonSequence,
} from '../store/actions';
import {RootState} from 'store';
import {GameState} from 'store/types';
import {ModalProps} from './types';
import styles from './styles';

const EndGameModal = ({gameState, navigation}: ModalProps) => {
  const [input, setInput] = useState('');
  const {results, score} = useSelector((state: RootState) => state.results);

  const dispatch = useDispatch();

  const showToast = () => {
    ToastAndroid.show('NO INPUT! PLEASE TYPE SOMETHING', ToastAndroid.SHORT);
  };

  function onSubmitHandler() {
    if (input.length === 0) showToast();
    else {
      dispatch(setUserName(input));
      const newResults = [...results, {username: input, score: score}];
      newResults.sort((a, b) => b.score - a.score);
      dispatch(setResults(newResults));
      dispatch(setGameState(GameState.START));
      setInput('');
      dispatch(setScore(0));
      dispatch(setHighScore(0));
      dispatch(setSimonSequence([]));
      navigation.navigate('ResultsScreen');
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={gameState === GameState.END}
      onRequestClose={() => {
        dispatch(setGameState(GameState.START));
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Enter your name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            onChangeText={text => {
              setInput(text);
            }}
          />
          <TouchableOpacity
            testID="submit-button"
            style={styles.submitButton}
            onPress={() => {
              onSubmitHandler();
            }}>
            <Text style={styles.textStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EndGameModal;
