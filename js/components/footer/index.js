
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon, View,FooterTab, Button, Text } from 'native-base';

import navigateTo from '../../actions/sideBarNav';

import styles from './styles';

class Footer extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (


            <FooterTab style={styles.footer}>
                  <Button onPress={() => this.navigateTo('calendar')}>
                      <Icon  name="calendar" />
                  </Button>
                  <Button onPress={() => this.navigateTo('form')}>
                      <Icon  name="pie" />
                  </Button>
                  <Button>
                  <Icon name="add-circle" />
                  </Button>
                  <Button onPress={() => this.navigateTo('contacts')}>
                      <Icon active   name="person" />
                  </Button>
                  <Button onPress={() => this.navigateTo('spinners')}>
                      <Icon  name="time" />
                  </Button>
            </FooterTab>


    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});


export default connect(mapStateToProps, bindAction)(Footer);
