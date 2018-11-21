import {
    StyleSheet,
  } from 'react-native';
  import Profile from '../components/user/show';
  const styles = StyleSheet.create({
    ...Profile,
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      headArea: {    
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20, 
        padding: 20 
      },
      headText: {
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
        marginBottom:20
      },
      linkText: {
        color: '#2c2c2c',
        fontSize: 18
      }
  });

  module.exports = styles;