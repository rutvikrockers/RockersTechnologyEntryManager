import {
    StyleSheet,
  } from 'react-native';

  import App from '../views/home';

  const styles = StyleSheet.create({
    ...App,
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
        marginLeft:20
        },
        overView: {
        fontFamily: 'Verdana',
        fontSize: 14,
        marginTop:10,
        marginLeft:20
       
        },
        htmlText: {
        width : 250,
        height: 100 
        },
        overviewtext: {
        color: 'black',
        marginLeft:20,
        marginTop: 10
        },
        avatar: {
          width:90,
          height: 90,
          borderRadius:90
        }
  });
  module.exports = styles;