import React, {Component} from 'react';
import {Text, ScrollView, TouchableHighlight, View, Image,StyleSheet,Link} from 'react-native';
import {connect} from 'react-redux';
import {destroySession} from '../../actions';
import styles from '../../styles/userprofile';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

class UserProfile extends Component {

    constructor(props) {
        super(props);
      }
      render() {
        return (
            <ScrollView>
            <View style={styles.container}>
            <View style={styles.headArea}>
              <Text style={styles.headText}>Account</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.userDetails}>
                    <View style={styles.userNameArea}>
                       
                        <Image  style={styles.avatar} source={{uri: this.props.user.user_image_url}}/>
                    
                        <View style={styles.userName}>
                            <View style={styles.accountType}>
                                <Text style={styles.accountTypeText}>{'Investor'.toUpperCase()}</Text>
                                <Text style={styles.accountTypeEdit}>Edit</Text>  
                            </View>
                            <Text style={styles.userNameText}>Christopher Sugrue</Text>
                            <View style={styles.textIconArea}>

                             <Icon size={15} name="email"style={styles.icon}/>    
                               
                                <Text style={styles.text}>csugrue@thecrowd.us</Text>
                            </View>
                            <View style={styles.textIconArea}>
                            <Icon size={15} name="location-on"  style={styles.icon} />    
                               
                                <Text style={styles.text}>Chicago, IL</Text>
                            </View>
                        </View>
                    </View>
                    <Text>
                        Brief biography of this investor. Excepteur sint occaecat cupidatat non proident.{"\n"} {"\n"}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
            </View>
            <View style={styles.linkarea}>
            <TouchableHighlight style={styles.linkItem} >
          <View style={styles.linkView}>
          <Icon size={35} name="credit-card"  style={styles.linkIcon} />    
             
                <Text style={styles.linkText}>Notifications</Text>
              </View>
              </TouchableHighlight>
            <TouchableHighlight style={styles.linkItem} >
              <View style={styles.linkView}>
              <Icon size={35} name="lock" style={styles.linkIcon}  />  
             
                <Text style={styles.linkText}>Privacy</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.linkItem} >
              <View style={styles.linkView}>
              <Icon size={35} name="edit" style={styles.linkIcon} />    
              
                <Text style={styles.linkText}>Terms of Service</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.linkItem} >
            <View style={styles.linkView}>
            <Icon size={35} name="note" style={styles.linkIcon} />    
              
                <Text style={styles.linkText}>Get Help</Text>
              </View>
            </TouchableHighlight>
        </View>
          </View> 
          </ScrollView>
        );
      }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
export default connect(mapStateToProps)(UserProfile);
