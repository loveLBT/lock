import React, { Component } from 'react'
import { AppRegistry,StyleSheet,Text,View } from 'react-native'
import Nav from './src/nav'

export default class lock extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Nav />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#F5FCFF',
	},
})


AppRegistry.registerComponent('lock', () => lock)