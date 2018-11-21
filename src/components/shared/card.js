import React, { Component } from 'react';
import {doFetch} from '../../actions/fetch';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import Video from 'react-native-video';
import Dimensions from 'Dimensions';
import {playVideo, isVideoPlaying, doVideoAction} from '../../actions/video';
import Button from '../shared/button';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const {width, height} = Dimensions.get('window');
import styles from '../../styles/main.js';
import {onFollow} from '../../actions/follow';
import {Redirect, Link} from 'react-router-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.player = [];
    this.togglePlay = this.togglePlay.bind(this);
    this.doVideoAction = this.doVideoAction.bind(this);
    this.company_id = ''
    this.token = ''
    this.state = {
      isHidden: false,
    };
  }
  
  async componentWillMount() {
    let mytokens = await AsyncStorage.getItem("token");
    this.token = mytokens;
  }
 
  togglePlay() {
    if(this.props.isPlaying){
      this.props.dispatch(isVideoPlaying(false));
    }else{
      this.props.dispatch(isVideoPlaying(true));
    }
  }
  onBtnFollow() {
    this.props.dispatch(onFollow(this.token,this.company_id))
     ( <Redirect to="../user/followers.js" /> )
  }

  doVideoAction(action, id, value) {
    this.showFeedback(action);
    this.props.dispatch(doVideoAction(action, id, value, this.props.user.token));
  }
  render() {
    let item = this.props.item;
    let index = this.props.index;
    return( 
      <View style={{flex: 1, width: width, height: height, margin: 0, padding: 0}}>
        <Video 
            source={{uri: this.props.uri}}
            ref={(ref) => {
              this.player[item.id] = ref
              this.company_id = item.company_id 
            }}
            resizeMode="cover"
            paused={ (this.props.currentVideo === index && this.props.isPlaying) ? false : true }
            style={styles.backgroundVideo}
            />

        <TouchableOpacity style={styles.overlay} onPress={this.togglePlay}>
        
          <View style={styles.cardActions}>

              <View style={styles.horizontalGroup}>

                  <View style={styles.verticalGroup}>
                    <Text style={styles.cardCategory}>{item.company_category_name}</Text>
                    <Text style={styles.cardTitle}>{item.company_name}</Text>
                  </View>
                  
                  <View style={styles.btnWrapper} key = {item.company_id}>
                    <TouchableOpacity
                      style={styles.btnFollow}
                      onPress={() => {this.onBtnFollow()}}>
                    <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                  </View>
              </View>
                
              <View style={styles.horizontalGroup}>

                <View style={styles.btnWrapper}>
                  <TouchableOpacity
                    onPress={this.props.onPress} style={styles.btnContainer} >
                    <Icon size={25} name="close" color="white" style={styles.footerBtn} />
                  </TouchableOpacity>
                </View>

                <View style={styles.btnWrapper}>
                  <TouchableOpacity
                    onPress={this.props.onPress} style={styles.btnContainer} >
                    <Icon size={25} name="favorite-border" color="white" style={styles.footerBtn} />
                  </TouchableOpacity>
                </View>

              </View>

          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user,
    feed: state.feed.allVideos,
    path: state.feed.videoPath,
    currentVideo: state.video.nowPlaying,
    isPlaying: state.video.isPlaying
  }
}

export default connect(mapStateToProps)(Card);
