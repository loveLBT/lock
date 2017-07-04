import React,{ Component } from 'react'
import { View,Text,PanResponder,TouchableHighlight,Dimensions,StyleSheet } from 'react-native'
import Icon from '../components/Icon'
import NavigationManager from '../constants/NavigationManager'

const width=Dimensions.get('window').width

class Home extends Component{
	static navigationOptions=({navigation})=>({
        headerLeft:<Icon onPress={()=>navigation.state.params.handleOpenDrawerLeft()}  name='md-person' />,
		headerRight:<Icon onPress={()=>navigation.state.params.handleOpenAmap()} name='ios-navigate' />,
        gesturesEnabled:true,
	})
	componentDidMount() {
		this.props.navigation.setParams({
			handleOpenDrawerLeft:()=>this.handleOpenDrawerLeft(),
			handleOpenAmap:()=>this.handleOpenAmap()
		})
	}

	handleOpenDrawerLeft(){
		NavigationManager.drawerNavigation.navigate('DrawerOpen')
	}
	handleOpenAmap(){
		console.log('aaaa')
	}
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.info}>请点击搜索</Text>
				<View 
					style={styles.touchable}
				>

				</View>
			</View>
		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center'
	},
	touchable:{
		width:width/2,
		height:width/2,
		borderRadius:width/4,
		borderWidth:4,
		borderColor:"#ccc"
	},
	info:{
		fontSize:16,
		paddingTop:30,
		paddingBottom:30
	}
})

export default Home