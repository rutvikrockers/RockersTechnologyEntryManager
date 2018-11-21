import React, {Component} from 'react';
import {Text, ScrollView, TouchableHighlight, View, Image, AsyncStorage, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import stylesMain from '../../styles/main';
import {fetchListEvents} from '../../actions/eventdetails';
class EventDetail extends Component {
    componentWillMount() {
   ///     alert(this.props.event.user_id);
       // this.props.dispatch(fetchListEvents(this.props.event.user_id,this.props.event.eventId));
       }
    render() {
      
        return (
    
            <View style={styles.container} >
                <Text style={styles.h2text}>
                Event Detail
                </Text>
            

<View style={stylesMain.verticalGroup}>

<Text style={styles.name}>{item.event_title}</Text>
  <Text style={styles.overView}>{"On "+ item.event_start_date_time }</Text>
  <Text style={styles.overView}>{"From "+ item.event_start_date_time + "To" + item.event_end_date_time }</Text>           


 

</View>
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
            fontSize: 18,
            marginLeft:10
            },
            overView: {
            fontFamily: 'Verdana',
            fontSize: 14,
            marginTop:10,
            marginLeft:10
           
            },
            htmlText: {
            width : 250,
            height: 100 
            },
            overviewtext: {
            color: 'black',
            marginLeft:10,
            marginTop: 10
            },
            avatar: {
              width:90,
              height: 90,
              borderRadius:90
            }
      });
    export const mapStateToProps = (state) => {
        return {
          user: state.user,
          event: state.event.all_events,
        }
      }
    export default connect(mapStateToProps)(EventDetail);

