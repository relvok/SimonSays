import Sound from 'react-native-sound';

import {SoundType, SoundArrayType} from 'store/types';
// Sound.setCategory('Playback'); // For iOS only.

function createSound(name: string) {
  let sound = new Sound(name + '.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
    }
  });
  return sound;
}

export function createColorSounds() {
  let sounds: SoundArrayType = [];
  let soundNames = ['red', 'green', 'blue', 'yellow', 'error'];
  soundNames.forEach(name => {
    const sound = createSound(name);
    sounds.push({name: name, sound: sound});
  });
  return sounds;
}

export function playError(errorSound: SoundType) {
  errorSound.sound.stop();
  errorSound.sound.play();
}

export function playAudio(colorSound: SoundType) {
  switch (colorSound.name) {
    case 'red':
      stopPlayAudio(colorSound);
      break;
    case 'blue':
      stopPlayAudio(colorSound);
      break;
    case 'green':
      stopPlayAudio(colorSound);
      break;
    case 'yellow':
      stopPlayAudio(colorSound);
      break;
    default:
      break;
  }
}

export function stopPlayAudio(colorSound: SoundType) {
  colorSound.sound.stop();
  colorSound.sound.play();
}
