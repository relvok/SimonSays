import React, {useState} from 'react';
import EndGameModal from 'components/EndGameModal';
import renderer from 'react-test-renderer';
import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor, fireEvent} from '@testing-library/react-native';
import {GameState} from 'store/types';

describe('EndGameModal', () => {
  const {navigation} = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  it('renders correctly', () => {
    renderer.create(
      <EndGameModal gameState={GameState.START} navigation={navigation} />,
    );
  });

  it('navigates to results screen on submit press', async () => {
    const component = renderer.create(
      <EndGameModal gameState={GameState.END} navigation={navigation} />,
    );

    const instance = component.root;
    const button = instance.findByProps({
      testID: 'submit-button',
    });

    waitFor(() => {
      fireEvent.press(button);
    });

    expect(navigation.navigate).toHaveBeenCalledWith('ResultsScreen');
  });

  it('checks user input when user clicks submit button', async () => {
    const {result} = renderHook(() => {
      const [input, setInput] = useState('test');
      return {input, setInput};
    });
    const {input, setInput} = result.current;

    const component = renderer.create(
      <EndGameModal gameState={GameState.END} navigation={navigation} />,
    );
    const instance = component.root;
    const button = instance.findByProps({
      testID: 'submit-button',
    });
    act(() => {
      fireEvent.press(button);
    });
    expect(input.length).toBeGreaterThan(0);
  });
});
