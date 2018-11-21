import React, {Component} from 'react';
import {View, TouchableOpacity, Platform, StyleSheet, Text, ScrollView, AsyncStorage,FlatList,Image} from 'react-native';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-native';
import Dimensions from 'Dimensions';
import {fetchEvents} from '../actions/event';
const {width, height} = Dimensions.get('window');
import stylesMain from '../styles/main';
import styles from '../styles/event';
type Props = {};
class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.id = ''
    this.eventId = ''
    this.state = {
      isHidden: false,
    };
  }
  onvanuenameclick() {
    
  //  this.props.dispatch(onFollow(this.company_id))
    return ( <Redirect to="../components/user/eventdetail.js" /> )
  }
   componentWillMount() {
   this.props.dispatch(fetchEvents(this.props.user.msg));
  }


  render() {
    return (
      <View style={styles.container} >
      <Text style={styles.h2text}>
     My Events
      </Text>
      <FlatList
data={this.props.event}
showsVerticalScrollIndicator={false}
renderItem={({item}) =>
      
<View style={stylesMain.horizontalGroup}>

<View style={stylesMain.verticalGroup}>
<Text style={styles.name}>{item.event_title}</Text>
<TouchableOpacity
onPress={() => {this.onvanuenameclick()}}>
                  <Text style={styles.overView}>{"On "+ item.event_start_date_time + " at " +item.vanue_name.replace(/<(.|\n)*?>/g, '')}</Text>
                    </TouchableOpacity>

</View>
 
{/* <View>
<Image source={{uri: this.props.path + '/' + item.thumb_img}} style={{width: 70, height: 70}} />
</View> */}
</View>
}
keyExtractor={item => item.event_title}

/>
  </View>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user,
    event: state.event.all_events,
  }
}

export default connect(mapStateToProps)(App);
