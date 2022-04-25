//create test for gamescreen
// Language: typescript
// Path: src\screens\__tests__\GameScreen.test.ts
// Compare this snippet from src\screens\styles.ts:

import React from 'react';
import GameScreen from 'screens/GameScreen';
// import renderer from 'react-test-renderer';
import {renderWithRedux} from '../../../helpers/testHelpers/renderWithRedux';
describe('Game screen', () => {
  it('renders correctly', () => {
    renderWithRedux(<GameScreen />);
  });
});
