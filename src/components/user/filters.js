import React, {Component} from 'react';
import {Text, ScrollView, TouchableHighlight, View, Image, AsyncStorage, FlatList, StyleSheet,Button,TouchableOpacity,
  Alert,} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../styles/colors';
import { TagSelect } from 'react-native-tag-select';
import styles1 from '../../styles/main.js';
import { SegmentedControls } from 'react-native-radio-buttons'
class Filters extends Component {
  
    render() {
      const data = [
        { id: 1, label: 'All' },
        { id: 2, label: 'University Name' },
        { id: 3, label: 'U N iversityname' },
        { id: 4, label: 'University' },
        { id: 5, label: 'U N Iversityname' },
        { id: 6, label: 'University' },
      ];
      const industrydata = [
        { id: 1, label: 'Technology' },
        { id: 2, label: 'Entertainment' },
        { id: 3, label: 'Food' },
        { id: 4, label: 'Biotechnology' },
        { id: 5, label: 'Agriculture' },
        { id: 6, label: 'Finance' },
        { id: 7, label: 'Tagname' },
        { id: 8, label: 'Nametag name' },
      ];
      const stagedata = [
        { id: 1, label: 'Seed' },
        { id: 2, label: 'Series A' },
        { id: 3, label: 'Bootstrapped' },
    
      ];
      const fundraisingdata = [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' },
      ];
      const affinitydata = [
        { id: 1, label: 'UChicago' },
        { id: 2, label: 'LGBTQ' },
        { id: 3, label: 'Single Parent' },
        { id: 4, label: 'Tagname' },
        { id: 5, label: 'Nametag name' },
        { id: 6, label: 'Tagname Tag' },
        { id: 7, label: 'Nametag name' },
        { id: 8, label: 'Tagname Tag' },
        { id: 9, label: 'Tagname' },
        { id: 10, label: 'Tagname' },
        { id: 11, label: 'Nametag name' },
        { id: 12, label: 'Tagname Tag' },
        { id: 13, label: 'Nametag name' },
        { id: 14, label: 'Tagname Tag' },
        { id: 15, label: 'Tagname' },
      ];
     
   
        return (
      
          <View style ={styles.container}>
          <ScrollView style={styles.container}>
          <View style={styles.container} >
          <Text style={styles.h2text}>
          Filters
          </Text>
          <View style={styles.newitem}>

         <View style={styles.mb20}>
          <Text style={styles.labelText}>Top 100 Global University Competition</Text>
          
        <TagSelect
          data={data}
           itemStyle={styles.item}
          itemLabelStyle={styles.label}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
          //max={3}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
       </View>
           
       <View style={styles.mb20}>
        <Text style={styles.labelText}>Industry</Text>
        <TagSelect
          data={industrydata}
          itemStyle={styles.item}
          itemLabelStyle={styles.label}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
        />
        </View>
        <View style={styles.mb20}>
 <Text style={styles.labelText}>Idea & Operational Stage</Text>
        <TagSelect
          data={stagedata}
          itemStyle={styles.item}
          itemLabelStyle={styles.label}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
        />
        </View>
        <View style={styles.mb20}>
        <Text style={styles.labelText}>Currently Fundraising</Text>
       
          <TagSelect
          data={fundraisingdata}
          itemStyle={styles.item}
          itemLabelStyle={styles.label}
          
           
      
           itemStyleSelected={styles.itemSelected}
           itemLabelStyleSelected={styles.labelSelected}
        />  
        </View>
        <View style={styles.mb20}>
         <Text style={styles.labelText}>Affinity Options</Text>
         <Text style={styles.affinityText}>Some text explaining main categories of affinity
options so user can search for relevant tags.</Text>
        <TagSelect
          data={affinitydata}
          itemStyle={styles.item}
          itemLabelStyle={styles.label}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
        />
        </View>
         </View>
        
          </View>
          
          </ScrollView>
          
<View style={styles.footer}>
<View style={styles.footerArea}>
<View style={styles.fotterTexArea}>
<Text style={styles.fotterTex}>
20 <Text style={styles.fotterTexGray}>Ideas</Text> 
</Text>
</View>
<View style={styles.fotterBtn}>
<TouchableHighlight style={styles.btnView} >
<Text style={styles.btnText}>Go</Text>
</TouchableHighlight>
</View> 
</View>

  </View>
         
         
         </View>
       
        );
      }
    }
    
    
    const mapStateToProps = (state) => {
      return {
        user: state.user,
        
       
      }
    }
    
export default connect(mapStateToProps)(Filters);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 20,
      paddingBottom:50,
      
      backgroundColor: '#FFFFFF',
      },
      codeContainer: {
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 4
      },
      buttonContainer: {
        flex: 1,
      },
      h2text: {
      marginTop: 10,
      marginLeft: 20,
      fontFamily: 'Helvetica',
      fontSize: 35,
      fontWeight: 'bold',
      },
      buttonContainer: {
        
        padding: 15,
      },
      buttonInner: {
        marginLeft: 20,
        marginBottom: 15,
      },
      newitem:{
        marginLeft: 20,
      },
      labelText: {
        
        marginTop: 10,
        color: '#000000',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10,
      },
      mb20: {
        marginBottom: 20
      },
     affinityText: {
      
        color: '#000000',
        fontSize: 13,
        marginBottom: 15,
      },
      item: {
       
        borderColor: '#FFFFFF',    
        backgroundColor: '#e8e8e8',
        borderRadius: 15,
        paddingLeft:10,
        paddingRight:10,
      },
      label: {
        paddingLeft:10,
        paddingRight:10,
        fontSize: 15,       
        color: '#000000'
      },
      itemSelected: {
        backgroundColor: '#E8AF2B',
        borderColor: '#E8AF2B',    
      },
      labelSelected: {
        borderColor: '#FFFFFF',    
        color: '#FFF',
      },
      fabMenuStyle: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        alignItems:'flex-end'
    },
    footer:{
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      height:65,
      borderTopWidth:2,
    
      borderTopColor:'#f1f1f1',
    
    },
    twotextcontainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      
    },
    textideaContainer: {
      
    },

     secondtextContainer:{
   
      
     },
     footerArea: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft:20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10
      },
      fotterTex: {
      color: '#fac449',
      fontWeight: 'bold',
      fontSize: 20,
      },
      fotterTexGray: {
      color: '#9b9b9b',
      marginRight: 5,
      },
      fotterTexArea: {
      marginTop: 8
      },
      btnView: { 
      height: 45,
      width: 200,
      backgroundColor: '#fac449',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:50
      },
      btnText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold'
      }
});