import React,{Component} from 'react'
import { View,StyleSheet } from 'react-native'
import NavigationManager from '../../constants/NavigationManager'

class Loading extends Component {
    static navigationOptions=({navigation})=>({
        header:null
    })
	render(){
		return (
			<View style={styles.container}>
               
            </View>
		)
	}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(238,115,87,0.8)'
    }
})

export default Loading