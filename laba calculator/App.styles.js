import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    color: 'black',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
  },
  landScape: {

  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
  calculationText: {
    fontSize: 24,
    color: 'black',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  landscape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnText: {
    fontSize: 30,
  },
  white: {
    color: 'white'
  },
  landOperations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }
});
