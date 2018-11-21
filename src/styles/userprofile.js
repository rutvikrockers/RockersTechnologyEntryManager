import {
  StyleSheet,
} from 'react-native';

import UserProfile from '../components/user/UserProfile';
const styles = StyleSheet.create({
  ...UserProfile,
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  headArea: {    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20, 
    padding: 20 
  },
  innerContainer: {
    paddingHorizontal:20
  },
  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  userDetails: {
    borderColor: '#cbcbcb',
    borderWidth: 1,
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical: 20,
    marginBottom: 30
  },
  userNameArea: {
    flexDirection: 'row',
    marginBottom:25
  },
  userName: {
    marginLeft:15,
    flex: 1
  },
  accountType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountTypeText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e9b10e'
  },
  accountTypeEdit:{
    color: '#1c79ea'
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize:20
  },
  avatar: {
    width:90,
    height: 90,
    borderRadius:90
  },
  textIconArea: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  icon: {
    width:15,
    height:15,
    marginRight: 7,
    marginTop:2
  },
  text: {
    color:'#373737'     
  },
  linkarea: {
      paddingHorizontal: 20,
      marginBottom: 10
  },
  hr:{
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    marginLeft: 20,    
    marginBottom:30    
  },
  linkItem: {
    marginBottom:30
  },
  linkView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkText: {
    color: '#2c2c2c',
    fontSize: 18,
  },
  linkIcon: {
    width:32,
    height:32,
    marginRight: 20  
  }
});
module.exports = styles;