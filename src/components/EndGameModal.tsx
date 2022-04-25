import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ToastAndroid,
} from 'react-native';
//get actions from redux
import {setUserName, setResults, setModalVisible} from '../store/actions';
import {RootState} from '../store';

//enter player's name in form and navigate to the results screen\
const showToast = () => {
  ToastAndroid.show('NO INPUT! PLEASE TYPE SOMETHING', ToastAndroid.SHORT);
};

const EndGameModal = ({modalVisible, navigation}: ModalProps) => {
  const [input, setInput] = useState('test');
  const {results, highScore} = useSelector((state: RootState) => state.results);

  // const {modalVisible, setModalVisible, navigation} = props;
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    if (input.length === 0) showToast();
    else {
      dispatch(setUserName(input));
      const newResults = [...results, {username: input, score: highScore}];
      //sort new results according to highScore
      newResults.sort((a, b) => b.score - a.score);
      dispatch(setResults(newResults));
      dispatch(setModalVisible(!modalVisible));
      setInput('');
      navigation.navigate('ResultsScreen');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
        //restart game
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Enter your name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            onChangeText={text => {
              setInput(text);
              console.log('text is', text);
            }}
          />
          <TouchableOpacity
            testID="submit-button"
            style={styles.button}
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

//stylesheet
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

//export
export default EndGameModal;
