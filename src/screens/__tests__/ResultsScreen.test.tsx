//create test for gamescreen
// Language: typescript
// Path: src\screens\__tests__\GameScreen.test.ts
// Compare this snippet from src\screens\styles.ts:

import React from 'react';
import ResultsScreen from 'screens/ResultsScreen';
import renderer from 'react-test-renderer';
import {waitFor, fireEvent} from '@testing-library/react-native';

describe('Results screen', () => {
  it('renders correctly', () => {
    renderer.create(<ResultsScreen />);
  });

  it('navigates to GameScreen', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const component = renderer.create(
      <ResultsScreen navigation={navigation} />,
    );

    const instance = component.root;
    const button = instance.findByProps({
      testID: 'back-button',
    });
    // button.props.onPress();

    waitFor(() => {
      fireEvent.press(button);
    });

    expect(navigation.navigate).toHaveBeenCalledWith('GameScreen');
  });
});
