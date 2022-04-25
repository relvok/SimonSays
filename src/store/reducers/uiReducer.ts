import {UiState} from '../types';

//set root states
const initialState: UiState = {
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
  padsDisabled: true,
  modalVisible: false,
  showStart: true,
};

export const uiReducer = (
  state: UiState = initialState,
  {type, payload}: any,
): UiState => {
  switch (type) {
    case 'SET_PADS_DISABLED':
      return {
        ...state,
        padsDisabled: payload,
      };
    case 'SET_PADS':
      return {
        ...state,
        pads: payload,
      };

    case 'SET_MODAL_VISIBLE':
      return {
        ...state,
        modalVisible: payload,
      };
    case 'SET_SHOW_START':
      return {
        ...state,
        showStart: payload,
      };

    default:
      return state;
  }
};
