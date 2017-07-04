import React,{Component} from 'react'
import { View,TouchableWithoutFeedback,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavigationManager from '../constants/NavigationManager'

class Icon extends Component {
	constructor(props) {
		super(props)
		
		this.state={
			iconColor:'#fff'
		}
	}
	handlePressIn(){
		this.setState({ iconColor:'#ee7357' })
	}
	handlePressOut(){
		this.setState({ iconColor:'#fff'})
		this.props.onPress()
	}
	render(){
		const { name }=this.props
		const {iconColor}=this.state
		return (
			<TouchableWithoutFeedback
				onPressIn={this.handlePressIn.bind(this)}
				onPressOut={this.handlePressOut.bind(this)}
			>
                <View style={styles.iconBox}>
                    <Ionicons name={name} size={26} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
    iconBox: {
        width:60, 
        height:44, 
        justifyContent:'center',
        alignItems:'center'
    },
})

export default Icon