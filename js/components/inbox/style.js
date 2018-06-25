const React = require('react-native');

const { StyleSheet } = React;

export default {
  container: {
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor:'#ddd',
  },
  cardHeader: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    paddingBottom: 10,
    height: 65,
  },
  cardItem: {
    backgroundColor: 'transparent',
    paddingTop: 5,
    paddingLeft: 60,
  },
  date: {
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '400',
    color: '#ddd',
  },

}
