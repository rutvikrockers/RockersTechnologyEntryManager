import React, {Component} from 'react';
import {View, TouchableOpacity, Platform, StyleSheet, Text, ScrollView, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {fetchFeed} from '../actions/feed';
import styles from '../styles/main.js';
import Card from '../components/shared/card'
import Dimensions from 'Dimensions';
import {playVideo, isVideoPlaying, doVideoAction} from '../actions/video';
const {width, height} = Dimensions.get('window');

type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.scrollEnd = this.scrollEnd.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
  }
  async componentWillMount() {
    this.props.dispatch(fetchFeed(this.props.user.token))
    AsyncStorage.setItem('token',this.props.user.token);
  }
  scrollEnd(ev,b,c) {
    let position = (ev.nativeEvent.contentOffset.y/height);
    this.changeVideo(position) 
  }
  changeVideo(position) {
    this.props.dispatch(playVideo(position)) 
  }
  render() {
    return (
      <ScrollView style={{paddingTop: 0}}
        decelerationRate={0}
        snapToInterval={height} //your element width
        snapToAlignment={"start"}
        animate={true}
        onScroll={this.scrollEnd}
        scrollEventThrottle={height}
      >
        {this.props.feed.map((item, index) => {
          let str = `${this.props.path}/${item.url}`;
      
          return(
            <Card item={item} key={item+index} index={index} uri= {`${this.props.path}/${item.url}`}></Card>
          )
        })}
      </ScrollView>
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

export default connect(mapStateToProps)(App);
