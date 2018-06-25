
import React, { Component } from 'react';
import { Image, Platform, ProgressViewIOS, ProgressBarAndroid } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem, Card, CardItem, Left, Body, Right } from 'native-base';

import { openDrawer } from '../../actions/drawer';



import styles from './styles';
import ProgressBar from './../loaders/ProgressBar';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class ProgressBarNSP extends Component {

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
      <Container  style={{ backgroundColor: '#384850' }} >
        <Image source={glow2} style={styles.container} >

          <Header>
            <Left>
              <Button transparent onPress={() => this.popRoute()}>
                <Icon name="arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Left>
            <Body>
              <Title>ProgressBar</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Right>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }} >
            <Card transparent foregroundColor="#000">
              <CardItem header>
                <Text style={{ color:'#000' }}>Default ProgressBar</Text>
              </CardItem>
              <CardItem style={{ paddingVertical: 30 }}>
                <ProgressBar color="red" progress={25} />
              </CardItem>
              <CardItem header>
                <Text style={{ color:'#000' }}>Inverse ProgressBar</Text>
              </CardItem>
              <CardItem style={{ paddingVertical: 30 }}>
              <ProgressBar inverse progress={76} />
              </CardItem>
              <CardItem header>
                <Text style={{ color:'#000' }}>Custom ProgressBar</Text>
              </CardItem>
              <CardItem style={{ paddingVertical: 30 }}>
                  <ProgressBar color="#66FB67" progress={39} />


              </CardItem>
            </Card>
          </Content>
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

export default connect(mapStateToProps, bindAction)(ProgressBarNSP);
