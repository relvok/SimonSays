export interface StartButtonProps {
  simonSequence: Array<Object>;
  pads: Array<PadType>;
  sounds: Array<Object>;
  setShowStart: (showStart: boolean) => void;

  playSequence: any;
}

export interface BoardProps {
  simonSequence: Array<Object>;
  pads: Array<PadType>;
  sounds: Array<Object>;
  score: number;
}

export interface PadType {
  name: string;
  value: string;
  isActive: boolean;
  percent: string;
}

export interface PadProps {
  pad: PadType;
  onPadClickHandler: any;
  padsDisabled: boolean;
}

export interface ModalProps {
  modalVisible: boolean;
  navigation: any;
}

export interface ResultItemProps {
  score: number;
  username: string;
}
