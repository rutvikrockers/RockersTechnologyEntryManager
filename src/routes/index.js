import { Switch, NativeRouter, Route, Redirect } from 'react-router-native';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Authenticated from './authenticated'
import Login from '../components/auth/login';
import Signup from '../components/auth/signup';
import Menu from '../components/shared/menu';

class Routes extends Component {
  render() {
    const props = this.props;
    return (
      <NativeRouter>
        <Switch>
          <Route exact  path="/menu" component={Menu}/>
          {props.loggedIn  ? <Route  path="/" component={Authenticated}/> : <Route exact path="/" component={Login}/>}
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </NativeRouter>
      )
      }
  }


const mapStateToProps = (state) => {
  return {
    user: state.user,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Routes);
