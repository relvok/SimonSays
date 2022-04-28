import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {GameState} from 'store/types';

import {highlightPad} from 'utils/colors';
import {PadProps} from './types';
import styles from './styles';

// Single Pad component
// Styling controlled by inherited props and active state.
// Inherits Pad click handler and a pad object from mapped pads array component.

const Pad = ({pad, onPadClickHandler, gameState}: PadProps) => {
  return (
    <View>
      <TouchableOpacity
        testID="pad-button"
        disabled={
          gameState === GameState.SIMON_PLAYING || gameState === GameState.START
        }
        activeOpacity={1}
        onPress={() => {
          GameState.USER_PLAYING && onPadClickHandler(pad);
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
