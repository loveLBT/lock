import React,{ Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import LWebView from '../components/LWebView'

class Location extends Component{
	static navigationOptions=({navigation})=>({
		title:'定位',
        gesturesEnabled:true
	})

	render(){
		return (
			<View style={styles.container}>
				<LWebView uri='http://192.168.2.108:8081/src/html/AMap.html' />
			</View>
		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1
	}
})

export default Location