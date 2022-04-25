import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {RootState} from '../store';
import Icon from 'react-native-vector-icons/FontAwesome';
import Gradient from '../components/Gradient';
import styles from './styles';
import {setShowStart, setSimonSequence} from 'store/actions';

const ResultsScreen = props => {
  //get username and score from reducer
  const {results} = useSelector((state: RootState) => state.results);
  const dispatch = useDispatch();
  const onReturnClickHandler = () => {
    dispatch(setShowStart(true));
    dispatch(setSimonSequence([]));
    props.navigation.navigate('GameScreen');
  };

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.item.username}</Text>
        <Text style={styles.itemText}>{item.item.score}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.resultsContainer}>
      <Gradient />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onReturnClickHandler}
          testID="back-button"
          style={styles.arrow}>
          <Icon name="arrow-left" color="#B0D8A4" size={30} />
        </TouchableOpacity>
        <Text style={styles.resultsTitle}>TOP 10</Text>
      </View>
      <FlatList
        data={results.slice(0, 10)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default ResultsScreen;
