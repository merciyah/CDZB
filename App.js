import React, {Component} from 'react';
import { Platform, FlatList, Text, Dimensions, StatusBar, StyleSheet, Image, View, TouuchableOpacity} from 'react-native';
import CarCanvas from './app/ui/carCanvas'

var locationRefs;
var windA;
var windB;

export default class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }
  render(){
    return(<View style={{flex:1}}></View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
