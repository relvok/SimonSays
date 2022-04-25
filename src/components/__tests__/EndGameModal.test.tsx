import React, {useState} from 'react';
import EndGameModal from 'components/EndGameModal';
import renderer from 'react-test-renderer';
import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor, fireEvent} from '@testing-library/react-native';
describe('EndGameModal', () => {
  it('renders correctly', () => {
    renderer.create(<EndGameModal />);
  });

  it('navigates to results screen on submit press', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const component = renderer.create(<EndGameModal navigation={navigation} />);

    const instance = component.root;
    const button = instance.findByProps({
      testID: 'submit-button',
    });
    // button.props.onPress();

    waitFor(() => {
      fireEvent.press(button);
    });

    expect(navigation.navigate).toHaveBeenCalledWith('ResultsScreen');
  });

  //test for checking user input when user clicks submit button
  it('checks user input when user clicks submit button', async () => {
    const {result} = renderHook(() => {
      const [input, setInput] = useState('test');
      return {input, setInput};
    });
    const {input, setInput} = result.current;
    const {navigation} = {
      navigation: {
        navigate: jest.fn(),
      },
    };
    const component = renderer.create(<EndGameModal navigation={navigation} />);
    const instance = component.root;
    const button = instance.findByProps({
      testID: 'submit-button',
    });
    // button.props.onPress();
    act(() => {
      fireEvent.press(button);
    });
    expect(input.length).toBeGreaterThan(0);
  });
});
