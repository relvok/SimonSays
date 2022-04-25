import Sound from 'react-native-sound';
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
  let sounds = [];
  let soundNames = ['red', 'green', 'blue', 'yellow', 'error'];
  soundNames.forEach(name => {
    const sound = createSound(name);
    sounds.push({name: name, sound: sound});
  });
  return sounds;
}

export function playError(errorSound) {
  errorSound.sound.stop();
  errorSound.sound.play();
}

export function playAudio(colorSound) {
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
