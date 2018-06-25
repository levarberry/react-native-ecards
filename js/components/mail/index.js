

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button,Left, Body ,Right, Icon, Card, CardItem,ListItem, Thumbnail } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');
const sanket = require('../../../images/contacts/sanket.png');

class Mail extends Component {

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
            <Title>Mail</Title>
            </Body>
            <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
            </Right>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>
            <Card transparent style={styles.card}>

              <CardItem header style={styles.cardHeader}>
              <Left>
                <Thumbnail style={{width: 36, height: 36, borderRadius: 18}} source={sanket} />
                <Body>
                <Text>Kumar Sanket</Text>
                <Text note style={styles.note}>StrapMobile</Text>
                </Body>
                </Left>
                <Right>
                <Text style={styles.date}>18 May, 5:15 PM</Text>
                </Right>
              </CardItem>

              <CardItem style={styles.cardItem}>
                  <Text style={{ marginBottom: 15 }}>
                      Before Monday night’s fixture against Newcastle, Leicester are top of the
                      Premier League. Before Monday night’s fixture against Newcastle,
                      Leicester are top of the Premier League. Before Monday night’s fixture against
                      Newcastle, Leicester are top of the Premier League. Before Monday night’s
                      fixture against Newcastle, Leicester are top of the Premier League.
                  </Text>
                <Text style={{ alignSelf: 'flex-start' }}>Thanks,</Text>
                <Text style={{ alignSelf: 'flex-start' }}>Kumar Sanket</Text>
                <Text style={{ alignSelf: 'flex-start' }}>Sahusoft India Pvt. Ltd.</Text>
              </CardItem>

            </Card>
             <Text style={{ color:'#fff',marginLeft:10, }}>Attachments</Text>
            <ListItem style={styles.listItem} >
            <Icon active name="images" style={{ fontSize: 27 }} />
            <Text style={{ marginLeft: 5,color:'#ffffff' }}>invitation.jpg</Text>
            </ListItem>
            <ListItem style={styles.listItem} >
            <Icon active name="images" style={{ fontSize: 27 }} />
            <Text style={{ marginLeft: 5,color:'#ffffff' }}>profile.jpg</Text>
            </ListItem>
            <ListItem style={styles.listItem} >
            <Icon active name="images" style={{ fontSize: 27 }} />
            <Text style={{ marginLeft: 5,color:'#ffffff' }}>mail.jpg</Text>
            </ListItem>
            <ListItem style={styles.listItem} >
            <Icon active name="images" style={{ fontSize: 27 }} />
            <Text style={{ marginLeft: 5,color:'#ffffff' }}>inbox.jpg</Text>
            </ListItem>
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

export default connect(mapStateToProps, bindAction)(Mail);
