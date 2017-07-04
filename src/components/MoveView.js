import React,{ Component } from 'react'
import { View,PanResponder,Animated,Dimensions,StyleSheet } from 'react-native'

const height=Dimensions.get('window').height - 80
const width=Dimensions.get('window').width
const halfHeight=height/2

class MoveView extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			top:halfHeight,
			topAnim: new Animated.Value(halfHeight),
			topName:'top',
			MoveShouldSetPanResponderState:true
		}
	}
	componentWillMount() {
		this.panResponder=PanResponder.create({
			onStartShouldSetPanResponder: () => true,
		    onMoveShouldSetPanResponder: ()=> this.state.MoveShouldSetPanResponderState,
		    onPanResponderGrant: this.handlePanResponderGrant.bind(this),
		    onPanResponderMove: this.handlePanResponderMove.bind(this),
	        onPanResponderRelease: this.handlePanResponderRelease.bind(this)
		})
	}

	handlePanResponderGrant(){
		this.Ctop=this.state.top
		this.Dtop = this.state.top

		this.setState({
			topName:'top',
			MoveShouldSetPanResponderState:true
		})
	}
	handlePanResponderMove(evt,gs){
		let distY=this.Dtop+gs.dy
		let _top=0
		let _MoveShouldSetPanResponderState=true

		if(distY<0){
			_top=0
			_MoveShouldSetPanResponderState=false
		}else if(distY>height-50){
			_top=height-50
			_MoveShouldSetPanResponderState=false
		}else{
			_top=distY
			_MoveShouldSetPanResponderState=true
		}

		this.setState({
			top: _top,
			topAnim: new Animated.Value(_top),
			MoveShouldSetPanResponderState:_MoveShouldSetPanResponderState
		})
	}
	handlePanResponderRelease(evt,gs){
		let distY=this.Dtop+gs.dy
		let _top=0
		if(Math.abs(gs.dy)>15){
			if(gs.dy>0){
				if(distY>halfHeight){
					_top=height-50
				}else{
					_top=halfHeight
				}
			}else{
				if(distY>halfHeight){
					_top=halfHeight
				}else{
					_top=0
				}
			}
		}else{
			_top=this.Ctop
		}

		Animated.timing(                          
	        this.state.topAnim,                     
	        {
	       		toValue: _top,                             
	        }
	    ).start()

		this.setState({
			top: _top,
			topName:'topAnim'
		})
	}
	render(){
		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={
					[styles.touchable,{
						top:this.state[this.state.topName],
					}]
				}
			>
				{this.props.children}
			</Animated.View>
		)
	}
}

const styles=StyleSheet.create({
    touchable: {
    	position:'absolute',
	   	width:width,
	   	height:height,
	    borderTopWidth: 1,
	    borderTopColor: '#ccc',
	    backgroundColor:'#fff'
	},
})

export default MoveView


{/**/}