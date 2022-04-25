import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {highlightPad} from 'utils/colors';
import {PadProps} from './types';
import styles from './styles';

const Pad = ({pad, onPadClickHandler, gameState}: PadProps) => {
  return (
    <View>
      <TouchableOpacity
        testID="pad-button"
        disabled={gameState.turn === 'simon'}
        activeOpacity={1}
        onPress={() => {
          onPadClickHandler(pad);
        }}
        style={[
          styles.pad,
          {
            backgroundColor: pad.isActive ? highlightPad(pad) : pad.value,
            transform: [{rotate: pad.percent}],
          },
        ]}></TouchableOpacity>
    </View>
  );
};

export default Pad;
