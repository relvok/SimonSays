import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {ResultItemProps} from './types';

// Results list item.
const ResultItem = ({score, username}: ResultItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{username}</Text>
      <Text style={styles.itemText}>{score}</Text>
    </View>
  );
};

export default ResultItem;
