import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Redirect, Link} from 'react-router-native';
import {authenticate,getGuestToken} from '../../actions';
import {connect} from 'react-redux';
import Button from '../shared/button';
import styles from '../../styles/main.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''}
  }
  componentWillMount() {
    this.props.dispatch(getGuestToken()); 
  }
  login() {
    this.props.dispatch(authenticate(this.state.email, this.state.password, this.props.user.guestToken)); 
  }
  render() {
    if(this.props.user.loggedIn){
      return ( <Redirect to="/home" /> )
    }
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            underlineColorAndroid='rgba(0,0,0,0)'
            autoCapitalize='none'
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize='none'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            underlineColorAndroid='rgba(0,0,0,0)'
            secureTextEntry={true}
          />
        </View>
        <View style={{marginTop: 20}} />
        <Button
          style={styles.btnContainer}
          onPress={() => {this.login()}}
          value="GO"
        />
        <Link to="/signup">
          <Text>Register</Text>
        </Link>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
