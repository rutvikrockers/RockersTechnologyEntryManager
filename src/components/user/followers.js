import React, {Component} from 'react';
import {Text, ScrollView, TouchableHighlight, View, Image, AsyncStorage, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import HTMLView from 'react-native-htmlview';

import {doFetch} from '../../actions/fetch';
import {fetchFollow} from '../../actions/followers';
import stylesMain from '../../styles/main.js';

const regex = /(<([^>]+)>)/ig;

class Followers extends Component {

    async componentWillMount() {
        let token = await AsyncStorage.getItem("token");
    
        this.props.dispatch(fetchFollow(this.props.user.token))
      }
      
  render() {
      
    return (

        <View style={styles.container} >
            <Text style={styles.h2text}>
            FOLLOWED
            </Text>
        <FlatList
            data={this.props.followers}
            showsVerticalScrollIndicator={false}
           
            renderItem={({item}) =>
            <View style={stylesMain.horizontalGroup}>

                <View style={stylesMain.verticalGroup}>
                  <Text style={styles.name}>{item.company_name}</Text>
                  <Text style={styles.overView}>{item.company_overview.replace(/<(.|\n)*?>/g, '')}</Text>
                </View>
                
                <View>
                     <Image source={{uri: this.props.path + '/' + item.thumb_img}} style={{width: 70, height: 70}} />
                </View>
            </View>
            }
            keyExtractor={item => item.company_name}
        />
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        paddingBottom:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        },
        h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
        },
        flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        marginLeft:10,
        borderRadius: 2
        },
        name: {
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: 18
        },
        overView: {
        fontFamily: 'Verdana',
        fontSize: 14,
        width : 270,
        height: 120 
        },
        htmlText: {
        width : 250,
        height: 100 
        },
        overviewtext: {
        color: 'black',
        marginLeft:10,
        marginTop: 10
        }
});

export const mapStateToProps = (state) => {
    return {
      user: state.user,
      followers: state.followers.follow_list,
      path: state.followers.image_path
    }
  }
  
export default connect(mapStateToProps)(Followers);


