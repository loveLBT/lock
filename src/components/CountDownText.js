import React,{ Component } from 'react'
import { Text,TouchableOpacity } from 'react-native'

class CountDownText extends Component{
	constructor(props) {
		super(props);
		
		this.state={
			text:props.startText,
			time:props.timeLeft,
			disabledBtn:false
		}
	}
	componentWillUnmount() {
		clearInterval(this.timer)
	}

	tick(){
		const { step,intervalText,endText,timeLeft }=this.props

		let newTime=this.state.time-1
		if(newTime>0){
			this.setState({
				text:intervalText(newTime),
				time:newTime,
				disabledBtn:true
			})
		}else{
			clearInterval(this.timer)
			this.setState({
				text:endText,
				time:timeLeft,
				disabledBtn:false
			})
		}
	}
	handlePress(){
		this.tick()
		this.timer=setInterval(this.tick.bind(this),1000)
	}
	render(){
		const btnStyle=this.state.disabledBtn?[this.props.style,{backgroundColor:'#ccc'}]:this.props.style

		return (
			<TouchableOpacity 
				onPress={this.handlePress.bind(this)}
				activeOpacity={0.8} 
				style={btnStyle}
				disabled={this.state.disabledBtn}
			>
				<Text style={{color:this.props.colorText}}>
					{this.state.text}
				</Text>
			</TouchableOpacity>
		)
	}
}

export default CountDownText
