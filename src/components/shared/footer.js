import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {Link} from 'react-router-native';

import styles from '../../styles/main.js';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.footer}>
        {/* <Link to="/menu"><Icon size={30} name="explore" color="white" style={styles.footerBtn} /></Link>
        <Link to="/"><Icon size={30} name="menu" color="white" style={styles.footerBtn} /></Link>
        <Link to="/menu"><Icon size={30} name="mail-outline" color="white" style={styles.footerBtn} /></Link>
        <Link to="/profile"><Icon size={30} name="account-circle" color="white" style={styles.footerBtn} /></Link> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Footer);

