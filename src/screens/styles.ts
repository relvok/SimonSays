import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // GameScreen styles.
  gameContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  gameTitle: {
    marginTop: '15%',
    color: '#BBBBBB',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '40%',
    fontFamily: 'Roboto',
  },
  // ResultsScreen styles.
  resultsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 15,
    marginLeft: 15,
  },
  resultsTitle: {
    flex: 1.5,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#090909',
  },
  arrow: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    height: '50%',
    backgroundColor: '#FD8060',
    left: 0,
    right: 0,
    top: 0,
    zIndex: -2,
  },
});

export default styles;
