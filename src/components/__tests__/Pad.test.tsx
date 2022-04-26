import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, act} from '@testing-library/react-native';
import Pad from 'components/Pad';
import {GameState} from 'store/types';

describe('Pad component', () => {
  const onPadClickHandler = jest.fn();
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Pad
          pad={{name: '', value: '', isActive: true, percent: ''}}
          onPadClickHandler={onPadClickHandler}
          gameState={GameState.START}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPadClickHandler when button is pressed', () => {
    const component = renderer.create(
      <Pad
        pad={{name: '', value: '', isActive: true, percent: ''}}
        onPadClickHandler={onPadClickHandler}
        gameState={GameState.START}
      />,
    );
    const instance = component.root;
    const button = instance.findByProps({
      testID: 'pad-button',
    });
    act(() => {
      fireEvent.press(button);
    });
    expect(onPadClickHandler).toHaveBeenCalled();
  });
});
