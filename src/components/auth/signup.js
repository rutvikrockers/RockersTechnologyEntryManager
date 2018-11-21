import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Redirect, Link} from 'react-router-native';
import {newUser} from '../../actions';
import {connect} from 'react-redux';
import Button from '../shared/button';
import Input from '../shared/input';

import styles from '../../styles/main.js';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {phone: "", email: ""}
  }
  createUser() {
    this.props.dispatch(newUser({
      email: this.state.email,
      password: this.state.phone
    }));
  }
  render() {
    return (
      <View style={styles.container}>
      <Input
        value={this.state.email}
        placeholder="email@example.com"
        onChange={(email) => this.setState({email})}
        secure={false}
      />
      <Input
        placeholder="Phone Number"
        onChange={(phone) => this.setState({phone})}
        value={this.state.phone}
      />
      <View style={{marginTop: 20}} />
        <Button
          style={styles.btnContainer}
          onPress={() => { this.createUser() }}
          value="SIGN UP"
        />
        <Link to="/">
            <Text>Sign In</Text>
        </Link>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.error,
  }
}

export default connect(mapStateToProps)(Signup);
