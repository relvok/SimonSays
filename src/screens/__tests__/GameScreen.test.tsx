import React from 'react';

import GameScreen from 'screens/GameScreen';

import {renderWithRedux} from '../../../helpers/testHelpers/renderWithRedux';

describe('Game screen', () => {
  it('renders correctly', () => {
    renderWithRedux(<GameScreen />);
  });
});
