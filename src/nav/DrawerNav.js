import React,{Component} from 'react'
import {DrawerNavigator} from 'react-navigation'
import { StyleSheet,Dimensions } from 'react-native'

import DrawerLeft from '../components/DrawerLeft'
import StackNav from './StackNav'
import NavigationManager from '../constants/NavigationManager'

const CustomDrawerContentComponent = (props)=>{
    return(
        <DrawerLeft style={styles.container} {...props}>

        </DrawerLeft>
    );
}

class StackNavScreen extends Component{
    componentDidMount() {
        NavigationManager.drawerNavigation=this.props.navigation
    }
    render(){
        return (
            <StackNav />
        )
    }
}

const DrawerNav = DrawerNavigator(
    {
        Home:{
            screen:StackNavScreen,
        }
    },
    {
        drawerWidth:Dimensions.get('window').width-80,
        drawerPosition:'left',
        contentComponent:(CustomDrawerContentComponent)
    }
)

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default DrawerNav