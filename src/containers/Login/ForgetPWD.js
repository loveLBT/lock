import React,{ Component } from 'react'
import { View,Image,TextInput,Button,TouchableOpacity,Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CountDownText from '../../components/CountDownText'

class ForgetPWD extends Component{
	handleInputChange(text){
		console.log(text)
	}
	handleBtnPress(){
		console.log('btn')
	}
	render(){
		return (
			<View style={styles.container}>
				<View style={styles.content}>
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
					<View style={styles.inputBox}>
						<TextInput
					        style={styles.input}
					        underlineColorAndroid="transparent"
					        autoCapitalize='none'
					        autoCorrect={false}
					        keyboardType='default'
					        maxLength={20}
					        onChangeText={this.handleInputChange.bind(this)}
					        placeholder='请输入新密码'
					    />
					</View>
					
					<View style={styles.btnBox}>
						<TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={this.handleBtnPress.bind(this)}>
							<Text style={styles.btnText}>确定</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		paddingLeft:10,
		paddingRight:10
	},
	content:{
		paddingTop:30
	},
	inputBox:{
		flexDirection: 'row',
		paddingLeft:10,
		height:60,
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:10,
		borderBottomWidth:1,
		borderBottomColor:'#ccc',
	},
	input:{
		flex:1,
		padding:0,
	},
	cdt:{
		width:130,
		padding:10,
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
})

export default ForgetPWD