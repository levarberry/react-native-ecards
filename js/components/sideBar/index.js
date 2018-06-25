
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Icon, List, ListItem, Content, Left, Body, Right, Thumbnail, Badge } from 'native-base';
import navigateTo from '../../actions/sideBarNav';
import styles from './style';

const logo = require('../../../images/icon2.png');

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }
  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={{ backgroundColor: '#252A30' }} >
        <Thumbnail
          style={{ alignSelf: 'center', marginTop: 20, marginBottom: 15, resizeMode: 'contain', height: 200, width: 200 }}
          circular
          source={logo}
        />

          <ListItem button onPress={() => this.navigateTo('home')} icon style={styles.links} >
            <Left>
              <Icon name="home" />
            </Left>
            <Body>
              <Text >Home</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('inbox')} icon style={styles.links} >
            <Left>
              <Icon active name="mail-open" />
            </Left>
            <Body>
               <Text>Inbox</Text>
            </Body>
            <Right>
              <Badge style={{ marginBottom: 8 }}><Text>2</Text></Badge>
            </Right>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('mail')} icon style={styles.links} >
            <Left>
              <Icon active name="paper" />
            </Left>
            <Body>
              <Text>Mail</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('compose')} icon style={styles.links} >
            <Left>
              <Icon name="paper-plane" />
            </Left>
            <Body>
              <Text>Compose</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('lists')} icon style={styles.links} >
            <Left>
              <Icon name="list-box" />
            </Left>
            <Body>
                <Text>List</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('icons')} icon style={styles.links} >
             <Left>
               <Icon name="planet" />
             </Left>
            <Body>
               <Text>Icons</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('progressBar')} icon style={styles.links} >
             <Left>
               <Icon name="finger-print" />
             </Left>
            <Body>
               <Text>Progressbar</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('spinners')} icon style={styles.links} >
             <Left>
               <Icon name="jet" />
             </Left>
            <Body>
               <Text>Spinner</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('form')} icon style={styles.links}>
             <Left>
              <Icon name="aperture" />
            </Left>
            <Body>
               <Text>Form</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('modal')} icon style={styles.links}>
             <Left>
                <Icon name="alert" />
             </Left>
            <Body>
               <Text>Modal</Text>
            </Body>
            <Right />
          </ListItem>
       </Content>
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


export default connect(mapStateToProps, bindAction)(SideBar);
