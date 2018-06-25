
import React, { Component } from 'react';
import { Image,Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem, Card, CardItem, Label, Item, Input, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Form extends Component {

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
              <Title>Form</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Right>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }} >
            <Card transparent foregroundColor="#000">
              <CardItem header >
                <Text style={{ color: '#000' }}>Input with icon</Text>
              </CardItem>
              <CardItem>
                <Item style={{ borderColor: '#d5d5d5' }}>
                  <Icon  active name="person" style={{ color: '#000' }} />
                  <Input placeholder="EMAIL" placeholderTextColor="#878787" style={{ color: '#000' }} />
                </Item>
              </CardItem>
              <CardItem header>
                <Text style={{ color: '#000' }}>Input</Text>
              </CardItem>
              <CardItem>
                <Item style={{ borderColor: '#d5d5d5' }}>
                  <Input placeholder="Name" placeholderTextColor="#878787" style={{ color: '#000' }} />
                </Item>
              </CardItem>
              <CardItem header>
                <Text style={{ color: '#000' }}>Input with floating label</Text>
              </CardItem>
              <CardItem>
                <Item  floatingLabel>
                  <Label>Username</Label>
                  <Input style={{ color: '#000' }} />
                </Item>
              </CardItem>
              <CardItem header>
                <Text style={{ color: '#000' }}>Input with inline label</Text>
              </CardItem>
              <CardItem >
                <Item inlineLabel>
                  <Label>ALIAS</Label>
                  <Input placeholder="John Doe" style={{ color: '#000', top: (Platform.OS === 'ios') ? undefined : 3 }} />
                </Item>
              </CardItem>
              <CardItem header>
                <Text style={{ color: '#000' }}>Input with stacked label</Text>
              </CardItem>
              <CardItem>
                <Item stackedLabel>
                  <Label>Address Line 1</Label>
                  <Input placeholder="Address" style={{ color: '#000' }} />
                </Item>
              </CardItem>
              <CardItem header>
                <Text style={{ color: '#000' }}>Input with Fixed label</Text>
              </CardItem>
              <CardItem>
                <Item fixedLabel style={{ borderColor: '#d5d5d5' }}>
                  <Label>Username</Label>
                  <Input  style={{ color: '#000' }} />
                </Item>
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

export default connect(mapStateToProps, bindAction)(Form);
