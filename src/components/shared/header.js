import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {
  Text,
  View
} from 'react-native';
import {Link} from 'react-router-native';
import {connect} from 'react-redux';

import styles from '../../styles/main.js';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.header}>
        <Link to="/menu"><Icon size={30} name="tune" color="white" style={styles.footerBtn} /></Link>
        <Text style={styles.headerText} ></Text>
        <Link to="/menu"><Text style={styles.headerBtn}></Text></Link>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.video.isPlaying
  }
}

export default connect(mapStateToProps)(Header);
