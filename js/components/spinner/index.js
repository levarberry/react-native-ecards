
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text,Spinner, Button, Icon,  ListItem, Left,Right,Body,Card, CardItem } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class SpinnerNSP extends Component {

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
            <Title>Spinner</Title>
            </Body>
            <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
            </Right>
          </Header>
          <Content padder style={{ backgroundColor: 'transparent' }} >
            <Card transparent foregroundColor="#000">
              <CardItem header>
                <Text style={{ color:'#000' }}>Default Spinner</Text>
              </CardItem>
              <CardItem>
              <Left />
              <Body>
                  <ListItem style={{ borderBottomWidth: 0 }}>
                   <Spinner />
                  </ListItem>
              </Body>
               <Right />
              </CardItem>
              <CardItem header>
                <Text style={{ color:'#000' }}>Inverse Spinner</Text>
              </CardItem>
              <CardItem>
              <Left />
              <Body>
                  <ListItem style={{ borderBottomWidth: 0 }}>

                 <Spinner inverse />

                  </ListItem>
                  </Body>
                  <Right />
              </CardItem>
              <CardItem header>
                <Text style={{ color:'#000' }}>Custom Spinner</Text>
              </CardItem>
              <CardItem>
                  <Left />
                  <Body>
                  <ListItem style={{ borderBottomWidth: 0 }}>

                    <Spinner color="#ff00a8" />

                  </ListItem>
                 </Body>
                 <Right />
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

export default connect(mapStateToProps, bindAction)(SpinnerNSP);
