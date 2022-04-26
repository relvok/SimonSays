import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Board component styles
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  padRow: {
    flexDirection: 'row',
  },
  score: {
    fontSize: 20,
    position: 'absolute',
    zIndex: 2,
    color: 'grey',
  },
  textContainer: {
    position: 'absolute',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    width: 70,
    height: 70,
    elevation: 5,
  },
  padsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  //Modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#FD8060',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  topGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50%',
    backgroundColor: 'white',
    zIndex: -1,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    backgroundColor: 'white',
    zIndex: -1,
  },
  pad: {
    width: 130,
    height: 130,
    borderTopLeftRadius: 130,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    margin: 5,
    borderWidth: 0,
    borderColor: 'white',
  },
  startContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 5,
    // transform: [{translateX: -35}, {translateY: -35}],
  },
  startButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    width: 70,
    height: 70,
    elevation: 5,
  },

  startText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'grey',
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
});

export default styles;
