import Sound from 'react-native-sound';
import {SoundType, SoundArrayType} from 'store/types';
// Sound.setCategory('Playback');

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
      colorSound.sound.stop();
      colorSound.sound.play();
      break;
    case 'blue':
      colorSound.sound.stop();
      colorSound.sound.play();
      break;
    case 'green':
      colorSound.sound.stop();
      colorSound.sound.play();
      break;
    case 'yellow':
      colorSound.sound.stop();
      colorSound.sound.play();
      break;
    default:
      break;
  }
}
