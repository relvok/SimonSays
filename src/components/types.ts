export interface StartProps {
  simonSequence: Array<Object>;
  pads: Array<Object>;
  sounds: Array<Object>;
  setShowStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PadsProps {
  simonSequence: Array<Object>;
  pads: Array<Object>;
  sounds: Array<Object>;
  score: number;
}

export interface PadProps extends PadsProps {
  pad: Object;
}
