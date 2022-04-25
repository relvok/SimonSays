//unit tests for Board component
// Language: typescript
// Path: src\components\__tests__\Board.test.tsx
// Compare this snippet from src\components\__tests__\Board.test.tsx:
import React, {useState} from 'react';

import Board from 'components/Board';
import renderer from 'react-test-renderer';
import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor, fireEvent} from '@testing-library/react-native';

describe('Board component', () => {
  it('renders correctly', () => {
    const pads = [
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
      component = renderer.create(<Board pads={pads} />);
  });
  // test for checking if playSequence is called when start button is clicked
});
