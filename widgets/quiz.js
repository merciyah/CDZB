import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

 class App extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {

	  };
	}
	render(){
		return(<View style={{flex:1}}><View style={{flexDirection:'row', borderWidth:1, width:200, top:60, alignSelf:'center', height:11, borderRadius:4, backgroundColor:'#c63f'}}>
      <View style={{left:34, borderRadius:5, height:11, width:1, backgroundColor:'#111' }} />
      <View style={{left:29, borderRadius:5, height:11, width:1, backgroundColor:'#111' }} />
      <View style={{left:48, borderRadius:5, height:11, width:1, backgroundColor:'#111' }} />
      <View style={{left:148, borderRadius:5, height:10, width:3, borderRightWidth:1, borderColor:'#fdf' }} />
      <View style={{left:169, borderRadius:5, height:10, width:1, borderRightWidth:1, borderColor:'#fdf' }} />
      <View style={{left:172, borderRadius:5, height:10, width:7, borderRightWidth:1, borderColor:'#fdf' }} />
      </View></View>)
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

export default App;