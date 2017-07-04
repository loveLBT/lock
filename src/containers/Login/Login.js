import React,{ Component } from 'react'
import { View,Image,TextInput,Button,TouchableOpacity,Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Login extends Component{
	static navigationOptions=({navigation})=>({
		header:null
	})

	handleInputChange(text){
		console.log(text)
	}
	handleBtnLogin(){
		const { navigation }=this.props
		navigation.navigate('Home')
	}
	handleBtnRegister(){
		const { navigation }=this.props
		navigation.navigate('Register')
	}
	handleBtnForgetPWD(){

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
						<Icon 
							name='ios-phone-portrait-outline'
							size={26}
							color='#fff'
						/>
						<TextInput
					        style={styles.input}
					        underlineColorAndroid="transparent"
					        autoCapitalize='none'
					        autoCorrect={false}
					        keyboardType='numeric'
					        maxLength={11}
					        onChangeText={this.handleInputChange.bind(this)}
					        placeholder='手机号码'
					    />
					</View>
					<View style={styles.inputBox}>
						<Icon 
							name='ios-lock-outline'
							size={26}
							color='#fff'
						/>
						<TextInput
					        style={styles.input}
					        underlineColorAndroid="transparent"
					        autoCapitalize='none'
					        autoCorrect={false}
					        keyboardType='default'
					        maxLength={20}
					        secureTextEntry={true}
					        onChangeText={this.handleInputChange.bind(this)}
					        placeholder='密码'
					    />
					</View>
					<View style={styles.btnBox}>
						<TouchableOpacity style={[styles.btn,{backgroundColor:'rgba(238,115,87,0.8)'}]} activeOpacity={0.8} onPress={this.handleBtnLogin.bind(this)}>
							<Text style={[styles.btnText,{color:'#fff'}]}>登录</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.btnBox}>
						<TouchableOpacity style={[styles.btn,{backgroundColor:'rgba(255,255,255,0.8)'}]} activeOpacity={0.8} onPress={this.handleBtnRegister.bind(this)}>
							<Text style={[styles.btnText]}>注册</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.footer}>
					<TouchableOpacity activeOpacity={0.5} onPress={this.handleBtnForgetPWD.bind(this)}>
						<Text style={styles.info}>忘记密码</Text>
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
		paddingLeft:20,
	},
	btnBox:{
		paddingTop:15,
	},
	btn:{
		paddingTop:10,
		paddingBottom:10,
		borderRadius:2
	},
	btnText:{
		textAlign:'center',
	},

	footer:{
		alignItems:'center',
		justifyContent:'center',
		paddingTop:30,
		paddingBottom:30
	},
	info:{
		textAlign:'center',
		fontSize:12
	}
})

export default Login