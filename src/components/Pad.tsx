import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {highlightPad} from 'utils/colors';
import {PadProps} from './types';

const Pad = ({pad, onPadClickHandler, padsDisabled}: PadProps) => {
  return (
    <View>
      <TouchableOpacity
        disabled={padsDisabled}
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

const styles = StyleSheet.create({
  pad: {
    width: 130,
    height: 130,
    borderTopLeftRadius: 130,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    margin: 5,
    borderWidth: 0,
    borderColor: 'white',
  },
});

export default Pad;
