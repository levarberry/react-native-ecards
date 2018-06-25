
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Footer ,Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import FooterComponent from './../footer';
import styles from './styles';

const {
  reset,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Home extends Component {  //eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container  style={{ backgroundColor: '#384850' }}>
          <Image source={glow2} style={styles.container} >

         <Header >
            <Left />
            <Body>
               <Title>Home</Title>
            </Body>
            <Right>
                <Button transparent onPress={this.props.openDrawer} >
                  <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
                </Button>
            </Right>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>

              <ListItem icon style={ styles.listitem } >
               <Left>
                 <Icon  active name="megaphone" style={{width: 30}} />
               </Left>
                <Body>
                  <Text>Discussion With Client</Text>
                </Body>
                <Right>
                  <Text style={{ fontWeight: '400' }} note>8:00 AM</Text>
                </Right>
              </ListItem>
              <ListItem icon style={ styles.listitem }>
              <Left>
                <Icon active name="people" style={{width: 30}} />
                </Left>
                <Body>
                <Text >Daily Stand Up</Text>
                </Body>
                <Right>
                <Text style={{ fontWeight: '400' }} note>10:00 AM</Text>
                </Right>
              </ListItem>
              <ListItem icon style={ styles.listitem }>
                <Left>
                <Icon active name="flag" style={{width: 30}} />
                </Left>
                <Body>
                <Text>Finish list Screen</Text>
                </Body>
                <Right>
                <Text style={{ fontWeight: '400' }} note>By 2:00 PM</Text>
                </Right>
              </ListItem>
              <ListItem icon style={ styles.listitem }>
                <Left>
                  <Icon active  name="restaurant" style={{width: 30}} />
                </Left>
                <Body>
                  <Text>Lunch Break</Text>
                </Body>
                <Right>
                  <Text style={{ fontWeight: '400' }} note>2:00 PM</Text>
                </Right>
              </ListItem>
             <Button
              style={styles.roundedButton}
              onPress={() => this.props.reset(this.props.navigation.key)}
             >
              <Icon active name="close" style={styles.closeIcon} />
            </Button>
          </Content>

          <Footer style={{ borderTopWidth: 0, backgroundColor: 'transparent' }}>
            <FooterComponent navigator={this.props.navigation} />
          </Footer>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
