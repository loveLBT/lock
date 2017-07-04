import React,{ Component } from 'react'
import { View,Text,WebView,Button,StyleSheet } from 'react-native'
import Icon from '../components/Icon'
import MoveView from '../components/MoveView'

class LWebView extends Component{
	constructor(props) {
		super(props);
		
		this.state={
			isError:false,
			message:{lists:[],showNGT:false,showSV:false}
		}
	}
	handleError(){
		this.setState({
			isError:true
		})
	}
	handleMessage(e){
		let data=e.nativeEvent.data
		this.setState({
			message:JSON.parse(data)
		})
	}
	handleNGTPress(){
		console.log('aaa')
	}
	render(){
		const {isError,message}=this.state
		const {uri}=this.props
		return (
			<View style={styles.container}>
				{ isError?
					<View style={styles.errorInfo}>
						<Text>网络有问题，请检查网络情况，点击刷新</Text>
					</View>
					:
					<View style={styles.main}>
						<WebView 
							ref={webview => { this.webview = webview }}
							source={{uri:uri}} 
							startInLoadingState={true}
							onError={this.handleError.bind(this)}
							onMessage={this.handleMessage.bind(this)}
						/>

						{ message.showNGT && 
							<View style={styles.ngt}>
								<View style={styles.ngtHeader}>
									<Text style={styles.ngtTitle}>国鼎大厦</Text>
									<Text style={styles.ngtMessage}>据你251米 小南路42号</Text>
								</View>
								<Button
									style={styles.ngtBtn}
									title='开始导航'
									color="#ee7357"
									onPress={this.handleNGTPress.bind(this)}
								/>
							</View>
						}

						{ message.showSV && 
							<MoveView />
						}

					</View>
				}
			</View>
		)
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
	},
	errorInfo:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	main:{
		flex:1
	},
	ngt:{
		backgroundColor:'#fff',
		paddingTop:15,
		paddingBottom:15,
		paddingLeft:15,
		paddingRight:15,
		borderTopWidth: 1,
	    borderTopColor: '#ccc',
	},
	ngtHeader:{
		borderBottomWidth: 1,
	    borderBottomColor: '#ccc',
	    paddingBottom:15,
	    marginBottom:15,
	},
	ngtTitle:{
		fontSize:16,
		color:'#333'
	},
	ngtMessage:{
		fontSize:12,
	}
})

export default LWebView