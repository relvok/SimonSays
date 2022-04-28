import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {useSelector} from 'react-redux';
import {RootState} from 'store';

import Gradient from 'components/Gradient';
import ResultItem from 'components/ResultItem';
import styles from './styles';
import {ResultItemProps} from 'components/types';

// Displays top 10 results list.
const ResultsScreen = (props: any) => {
  const {results} = useSelector((state: RootState) => state.results);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(results);
  }, []);

  const onReturnClickHandler = () => {
    props.navigation.navigate('GameScreen');
  };

  const renderItem = (item: ResultItemProps) => {
    return <ResultItem score={item.score} username={item.username} />;
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
        data={data.slice(0, 10)}
        renderItem={item => renderItem(item.item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ResultsScreen;
