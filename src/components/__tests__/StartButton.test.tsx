import React from 'react';
import StartButton from 'components/StartButton';
import renderer from 'react-test-renderer';
import {fireEvent, act} from '@testing-library/react-native';

describe('StartButton component', () => {
  const setShowStart = jest.fn();
  const playSequence = jest.fn();
  //render StartButton component
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <StartButton
          sounds={[]}
          pads={[]}
          simonSequence={[]}
          setShowStart={setShowStart}
          playSequence={playSequence}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls setShowStart when button is pressed', () => {
    const component = renderer.create(
      <StartButton
        sounds={[]}
        pads={[]}
        simonSequence={[]}
        setShowStart={setShowStart}
        playSequence={playSequence}
      />,
    );
    const instance = component.root;
    const button = instance.findByProps({
      testID: 'start-button',
    });
    // button.props.onPress();
    act(() => {
      fireEvent.press(button);
    });
    expect(setShowStart).toHaveBeenCalled();
  });
});
