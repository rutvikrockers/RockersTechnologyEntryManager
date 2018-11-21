import React, {Component} from 'react';
import {Text, ScrollView, TouchableHighlight, View, Image,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Footer from '../../components/shared/footer';
import Home from '../../views/home';
import {Link, Redirect} from 'react-router-native';
import Followers from '../../components/user/followers'
import Filters from '../../components/user/filters';

import Settings from '../../components/user/Settings';
import styles from '../../styles/show';


class Profile extends Component {
  
  render() {
    var props = this.props;
    var match = props.match;
    return (
      
      <View style={styles.container}>
      <View style={styles.headArea}>
        <Text style={styles.headText}>Account</Text>
      </View>
      <View style={styles.linkarea}>
        
          <Link to="/userprofile" style={styles.linkItem}><Text style={styles.linkText}>UserProfile</Text></Link>
          <TouchableHighlight style={styles.linkItem}>
              <Text style={styles.linkText}>Investment History</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.linkItem}>
              <Text style={styles.linkText}>Payment</Text>
          </TouchableHighlight>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.linkarea}>
          <TouchableHighlight style={styles.linkItem}>
              <Text style={styles.linkText}>Invite Friends</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.linkItem}>
              <Text style={styles.linkText}>Linked Accounts</Text>
          </TouchableHighlight>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.linkarea}>
     
      
      <Link to="/settings" style={styles.linkItem}><Text style={styles.linkText}>Settings</Text></Link>
          
          
      </View>
     
        <Footer />
    </View> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);

