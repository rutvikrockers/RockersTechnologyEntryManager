import React, {Component} from 'react';
import {Text, ScrollView, TouchableHighlight, View, Image,StyleSheet,Link} from 'react-native';
import {connect} from 'react-redux';
import {destroySession} from '../../actions';
import styles from '../../styles/settings';


class Settings extends Component {
    constructor(props) {
        super(props);
      }
      logout() {
        this.props.dispatch(destroySession()); 
      }
    render() {
       
        return (
            <View style={styles.container}>
            <View style={styles.headArea}>
           
         
        
             <TouchableHighlight style={styles.backBtn}>
            <Text style={styles.backText}>Back</Text>
              </TouchableHighlight> 
              <Text style={styles.headText}>Settings</Text>
            </View>
            <View style={styles.linkarea}>
                <TouchableHighlight style={styles.linkItem}>
                    <Text style={styles.linkText}>Notifications</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.linkItem}>
                    <Text style={styles.linkText}>Change Password</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.linkarea}>
                <TouchableHighlight style={styles.linkItem}>
                    <Text style={styles.linkText}>Terms of Service</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.linkItem} >
                    <Text style={styles.linkText}>Privacy Policy</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.linkarea}>
                <TouchableHighlight style={styles.linkItem}>
                    <Text style={styles.linkText}>Get Help</Text>
                </TouchableHighlight>
                <Text
            style={styles.linkText}
            onPress={() => {this.logout()}}
          >Logout</Text>
              
            </View>
          </View> 
            );

    }
}

  
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
export default connect(mapStateToProps)(Settings);