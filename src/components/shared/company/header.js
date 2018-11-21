import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../shared/button';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {logoURI, logoSize, flexDirection} from './helpers/header';
import styles from '../../../styles/main.js';
import CompanyTag from './tag';

export default class CompanyHeader extends Component {
  render() {
    var title = this.props.title;
    var companyName = this.props.companyName;
    var followers = this.props.followers;
    var investors = this.props.investors || 0;
    var address = this.props.address;
    var uri = logoURI(this.props);
    var direction = flexDirection(this.props);
    var size = logoSize(this.props);
    var tags = this.props.tags;
    if (tags) {
      tags = tags.map((tag) => 
        <CompanyTag key={tag} value={tag} />
      );
    }
   
    let titleText;
    if (title) {
      titleText = <Text style={header.category}>{title}</Text>;
    } else {
      titleText = null;
    }

    let popularityText;
    if (followers || investors) {
      popularityText = (
        <Text style={header.popularity}>
          {followers} followers {investors} Investors
        </Text>
      );
    } else {
      popularityText = null;
    }
    return (
      <View style={{...header.container, flexDirection: direction}}>
        <View style={header.copyContainer}>
          {titleText}
          <Text style={header.name}>{companyName}</Text>
          {popularityText}
          <Text>{address}</Text>
          <View style={header.tagContainer}>
            {tags}
          </View>
        </View>
        { uri ? <Image style={size} source={{uri: uri}} /> : null}
        {this.props.children}
      </View>
    );
  }
}

const header = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
  },
  copyContainer: {
    flexBasis: '80%',
    marginBottom: 10,
  },
  category: {
    color: 'goldenrod',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    marginBottom: 5,
    color: 'rgba(0, 0, 0, 0.875)',
    fontWeight: 'bold',
    fontSize: 24,
  },
  popularity: {
    marginBottom: 5,
  },
  tagContainer: {
    flexDirection: 'row',
  },
});
