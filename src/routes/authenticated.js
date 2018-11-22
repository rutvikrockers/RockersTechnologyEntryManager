import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-native';
import {
  View
} from 'react-native';

import Home from '../views/home';
import Profile from '../components/user/show';
import Followers from '../components/user/followers';
import Filters from '../components/user/filters';
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import Settings from '../components/user/Settings';
import UserProfile from '../components/user/UserProfile';
import {connect} from 'react-redux';
import styles from '../styles/main.js';

import Feed from './feed';


class Authenticated extends Component {
  render() {
    var props = this.props;
    var match = props.match;
    return (
      <View style={styles.root}>
        <Header />
        <Switch>
          <Route exact  path={match.url} component={Home}/>
          <Route exact  path={match.url+"feed"} component={Feed}/>
          <Route exact  path={match.url+"profile"} component={Profile}/>
          <Route exact  path={match.url+"followers"} component ={Followers}/>
          <Route exact  path={match.url+"filters"} component ={Filters}/>
          <Route exact  path={match.url+"settings"} component ={Settings}/>
          <Route exact  path={match.url+"userprofile"} component ={UserProfile}/>
        </Switch>
        <Footer />
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

export default connect(mapStateToProps)(Authenticated);
