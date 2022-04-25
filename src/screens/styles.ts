import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#F4F4F4',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#AAAAAA',
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
