import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import {Link, Redirect} from 'react-router-native';
import {connect} from 'react-redux';
import {destroySession} from '../../actions';
import {playVideo, isVideoPlaying} from '../../actions/video';
import Button from './button';

import styles from '../../styles/main.js';

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  logout() {
    this.props.dispatch(destroySession()); 
  }
  componentWillMount(){
    this.props.dispatch(isVideoPlaying(false));
    this.props.dispatch(playVideo(0)) 
  }
  render() {
    if(!this.props.loggedIn){
      return (<Redirect to="/" />)
    }
    return (
      
      <View style={styles.root}>
        <View style={styles.header}>
          <Link to="/"><Text>Back</Text></Link>
          <Text style={styles.headerText} >Menu</Text>
        </View>
        <View style={styles.menu}>
            
          <Text style={styles.menuHeader}>{this.props.user.email}</Text>
          <Link to="/profile"><Text style={styles.menuItem}>Profile</Text></Link>
         
          <Text
            style={styles.menuItem}
            onPress={() => {this.logout()}}
          >Logout</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Menu);
