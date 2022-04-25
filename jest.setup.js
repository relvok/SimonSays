import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';
import {renderWithRedux} from './helpers/testHelpers/renderWithRedux';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native-sound', () => {
  class SoundMock {
    constructor(path, type, callback) {}
  }

  SoundMock.setVolume = jest.fn();
  SoundMock.setNumberOfLoops = jest.fn();
  SoundMock.play = jest.fn();
  SoundMock.stop = jest.fn();

  SoundMock.setCategory = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  });

  return SoundMock;
});

const dispatch = jest.fn();
// const useSelector = jest.fn();
jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return {
        pads: [
          {name: 'green', value: '#B0D8A4', isActive: false, percent: '0deg'},
          {
            name: 'yellow',
            value: '#FEE191',
            isActive: false,
            percent: '90deg',
          },
          {
            name: 'red',
            value: '#E84258',
            isActive: false,
            percent: '270deg',
          },
          {
            name: 'blue',
            value: '#8281A0',
            isActive: false,
            percent: '180deg',
          },
        ],
        simonSequence: [
          {name: 'green', value: '#B0D8A4', isActive: false, percent: '0deg'},
        ],
        userSequence: [
          {name: 'green', value: '#B0D8A4', isActive: false, percent: '0deg'},
        ],
        results: [{username: 'test1', score: 5}],
      };
    }),
    useDispatch: jest.fn().mockReturnValue(() => {
      return {};
    }),
  };
});
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
