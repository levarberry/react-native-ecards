import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import React, { Component } from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Button, Icon, Tabs, Tab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import AllContacts from './allContacts';
import Favourites from './favourites';
import Recent from './recent';
import styles from './styles';


const deviceWidth = Dimensions.get('window').width;
const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Contacts extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >

          <Header hasTabs style={{ elevation: 0 }}>
            <Left>
              <Button transparent onPress={() => this.popRoute()}>
                <Icon name="arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Left>
            <Body>
              <Title>Contacts</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Right>
          </Header>
          <Tabs>
            <Tab heading="All">
              <AllContacts />
            </Tab>
            <Tab heading="Favourite">
              <Favourites />
            </Tab>
            <Tab heading="Recent">
              <Recent />
            </Tab>
          </Tabs>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Contacts);
