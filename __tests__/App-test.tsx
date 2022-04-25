/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
jest.mock('react-native-sound', () => 'Sound');
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import 'react-native-gesture-handler';
// import Sound from 'react-native-sound';
// expect(Sound.prototype.play).toHaveBeenCalled();
it('renders correctly', async () => {
  renderer.create(<App />);
});
