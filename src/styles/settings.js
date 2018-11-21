import {
    StyleSheet,
  } from 'react-native';
import Settings from '../components/user/Settings';
  const styles = StyleSheet.create({
    ...Settings,
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      headArea: {    
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20, 
        padding: 20 
      },
      backText: {
        
        fontSize: 15,
       
        fontWeight: 'bold',
        color: '#2d2d2d',
      },
      headText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,  
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2d2d2d',
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
        marginBottom:20,
        backgroundColor: 'transparent'
      },
      buttonPress: {
        backgroundColor: 'transparent'
      },
      linkText: {
        color: '#2c2c2c',
        fontSize: 18
      },
      backBtn: {
      
          marginTop:5,
          marginRight:10
      }
  });
  
  module.exports = styles;