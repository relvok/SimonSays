import React from 'react';
import renderer from 'react-test-renderer';

import Board from 'components/Board';

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
      component = renderer.create(
        <Board
          highScore={0}
          simonSequence={[]}
          pads={pads}
          score={0}
          sounds={[]}
        />,
      );
  });
});
