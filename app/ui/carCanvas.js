import React, {Component} from 'react';
import { Platform, FlatList, Text, Dimensions, StatusBar, StyleSheet, Image, View, TouuchableOpacity} from 'react-native';
import car1 from '../../assets/images/car2.png'

// Infection data on Alzemias 
var pokeballs = [
  {
    name: "Steve",
    Health: 0.49,
    isBenzodiazapines: false
},{
  name: "Sherry",
  Health: 0.22,
  isBenzodiazapines: false},
  {
  name: "Rachael",
  Health: 0.22,
  isBenzodiazapines: true},
  {
  name: "Ryu",
  Health: 0.22,
  isBenzodiazapines: false},
  {
  name: "Joe",
  Health: 0.22,
  isBenzodiazapines: true}
]

let pokebag = pokeballs;


export default class CarCanvas extends Component{
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
