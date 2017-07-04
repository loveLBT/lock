import React,{ Component } from 'react'
import { View,Image,TextInput,Button,TouchableOpacity,Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CountDownText from '../../components/CountDownText'

class Register extends Component{
	static navigationOptions=({navigation})=>({
		header:null
	})
	handleInputChange(text){
		console.log(text)
	}
	handleBtnPress(){
		console.log('btn')
	}
	render(){
		return (
			<Image 
				source={require('../../assets/img/login_bg.jpg')}
				style={styles.container}
			>

				<View style={styles.header}>
					<View style={styles.logo}></View>
				</View>

				<View style={styles.content}>
					<View style={styles.inputBox}>
						<TextInput
					        style={styles.input}
					        underlineColorAndroid="transparent"
					        autoCapitalize='none'
					        autoCorrect={false}
					        keyboardType='default'
					        maxLength={20}
					        onChangeText={this.handleInputChange.bind(this)}
					        placeholder='请输入姓名'
					    />
					</View>
					<View style={styles.inputBox}>
						<TextInput
					        style={styles.input}
					        underlineColorAndroid="transparent"
					        autoCapitalize='none'
					        autoCorrect={false}
					        keyboardType='numeric'
					        maxLength={11}
					        onChangeText={this.handleInputChange.bind(this)}
					        placeholder='请输入手机号码'
					    />
					</View>
					<View style={styles.inputBox}>
						<TextInput
					        style={styles.input}
					        underlineColorAndroid="transparent"
					        autoCapitalize='none'
					        autoCorrect={false}
					        keyboardType='default'
					        maxLength={20}
					        onChangeText={this.handleInputChange.bind(this)}
					        placeholder='请输入密码'
					    />
					</View>
					<View style={styles.inputBox}>
						<TextInput
					        style={styles.input}
					        underlineColorAndroid="transparent"
					        autoCapitalize='none'
					        autoCorrect={false}
					        keyboardType='default'
					        maxLength={20}
					        onChangeText={this.handleInputChange.bind(this)}
					        placeholder='请输入验证码'
					    />
					    <CountDownText 
					    	style={styles.cdt}
					    	startText='获取验证码'
				            endText='重新获取'
				            colorText='#fff'
				            timeLeft={60} 
				            step={-1} 
				            intervalText={(sec) => sec +'s'}
					    />
					</View>
					<View style={styles.btnBox}>
						<TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={this.handleBtnPress.bind(this)}>
							<Text style={styles.btnText}>确定</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.footer}>
					<Text style={{fontSize:12}}>点击确定，表示你同意智能挂锁</Text>
					<TouchableOpacity activeOpacity={0.5}>
						<Text style={styles.info}>《服务协议》</Text>
					</TouchableOpacity>
				</View>
			</Image>
		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		width:null,
		height:null,
		paddingLeft:10,
		paddingRight:10
	},
	header:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	logo:{
		width:100,
		height:100,
		borderRadius:50,
		backgroundColor:'#ee7357',
		opacity:.5
	},
	content:{

	},
	inputBox:{
		flexDirection: 'row',
		padding:10,
		marginBottom:10,
		borderBottomWidth:1,
		borderBottomColor:'#fff'
	},
	input:{
		flex:1,
		padding:0,
	},
	cdt:{
		position:'absolute',
		top:0,
		right:5,
		width:130,
		padding:5,
		backgroundColor:'#ee7357',
		alignItems:'center',
		justifyContent:'center'
	},
	btnBox:{
		paddingTop:15,
	},
	btn:{
		paddingTop:10,
		paddingBottom:10,
		borderRadius:2,
		backgroundColor:'rgba(238,115,87,0.8)'
	},
	btnText:{
		textAlign:'center',
		color:'#fff'
	},
	footer:{
		flexDirection: 'row',
		alignItems:'center',
		justifyContent:'center',
		paddingTop:30,
		paddingBottom:30
	},
	info:{
		color:'#ee7357',
		fontSize:12,
	}
})

export default Register