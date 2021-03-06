
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Left, Right, Body, Icon, Card, CardItem, Thumbnail } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './style';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');
const sanket = require('../../../images/contacts/sanket.png');
const pratik = require('../../../images/contacts/pratik.png');

class Inbox extends Component {

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
      <Container  style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >

          <Header>
            <Left>
              <Button transparent onPress={() => this.popRoute()}>
                <Icon name="arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Left>
            <Body>
              <Title>Inbox</Title>
            </Body>
            <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
            </Right>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }}>
            <Card transparent foregroundColor="#fff" style={styles.card}>
              <CardItem style={styles.cardHeader} header>
              <Left>
                <Thumbnail style={{width: 36, height: 36, borderRadius: 18}} source={sanket} />
                <Body>
                <Text>Kumar Sanket</Text>
                <Text note>StrapMobile</Text>
                </Body>
              </Left>

              <Right>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </Right>
              </CardItem>

              <CardItem style={styles.cardItem} >
                <Text>
                    Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League.
                </Text>
              </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
              <CardItem style={styles.cardHeader} header>
              <Left>
                <Thumbnail style={{width: 36, height: 36, borderRadius: 18}} source={pratik} />
                <Body>
                <Text>Kumar Pratik</Text>
                <Text note>StrapUI</Text>

                </Body>
                </Left>
                <Right>
                  <Text style={styles.date}>Monday 05, 11 AM</Text>
                </Right>
              </CardItem>

              <CardItem style={styles.cardItem} >
                <Text>
                    Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League.
                </Text>
              </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
            <CardItem style={styles.cardHeader} header>
            <Left>
              <Thumbnail style={{width: 36, height: 36, borderRadius: 18}} source={pratik} />
              <Body>
              <Text>Kumar Pratik</Text>
              <Text note>StrapUI</Text>

              </Body>
              </Left>
              <Right>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </Right>
            </CardItem>

            <CardItem style={styles.cardItem} >
              <Text>
                  Before Monday night’s fixture against Newcastle,
                  Leicester are top of the Premier League.
              </Text>
            </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
            <CardItem style={styles.cardHeader} header>
            <Left>
              <Thumbnail style={{width: 36, height: 36, borderRadius: 18}} source={pratik} />
              <Body>
              <Text>Kumar Pratik</Text>
              <Text note>StrapUI</Text>

              </Body>
              </Left>
              <Right>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </Right>
            </CardItem>

            <CardItem style={styles.cardItem} >
              <Text>
                  Before Monday night’s fixture against Newcastle,
                  Leicester are top of the Premier League.
              </Text>
            </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
            <CardItem style={styles.cardHeader} header>
            <Left>
              <Thumbnail style={{width: 36, height: 36, borderRadius: 18}} source={pratik} />
              <Body>
              <Text>Kumar Pratik</Text>
              <Text note>StrapUI</Text>

              </Body>
              </Left>
              <Right>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </Right>
            </CardItem>

            <CardItem style={styles.cardItem} >
              <Text>
                  Before Monday night’s fixture against Newcastle,
                  Leicester are top of the Premier League.
              </Text>
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

export default connect(mapStateToProps, bindAction)(Inbox);
