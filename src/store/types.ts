export interface SequenceState {
  simonSequence: Array<Object>;
  userSequence: Array<Object>;
}

export interface UiState {
  pads: Array<Object>;
  padsDisabled: boolean;
  modalVisible: boolean;
  showStart: boolean;
}

export interface ResultsState {
  results: Array<Object>;
  score: number;
  highScore: number;
  username: string;
}

export interface AudioState {
  sounds: Array<Object>;
}
