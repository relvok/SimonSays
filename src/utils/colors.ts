import {PadType} from 'components/types';

// Highlight current pad.
export function highlightPad(pad: PadType) {
  switch (pad.name) {
    case 'red':
      return '#EA8290';
    case 'green':
      return '#CBF2C0';
    case 'blue':
      return '#A4A2E1';
    case 'yellow':
      return '#FFEFC2';
    default:
      return;
  }
}
