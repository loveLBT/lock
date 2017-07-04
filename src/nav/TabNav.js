import React,{ Component } from 'react'
import { TabNavigator,TabBarBottom } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../containers/Home'
import CommonScreen from '../containers/Common'
import LocksScreen from '../containers/Locks'

const TabNav=TabNavigator(
	{
		Home:{
			screen:HomeScreen,
            path:'/',
            navigationOptions:{
                title:'首页',
                tabBarLabel: '首页',
                tabBarIcon:({tintColor,focused})=>(
                    <Icon 
                        name={focused?'ios-home':'ios-home-outline'}
                        size={26}
                        color={tintColor}
                    />
                )
            }
		},
		Common:{
			screen:CommonScreen,
            path:'/common',
            navigationOptions:{
                title:'常用锁',
                tabBarLabel:'常用锁',
                tabBarIcon:({tintColor,focused})=>(
                    <Icon 
                        name={focused?'ios-cash':'ios-cash-outline'}
                        size={26}
                        color={tintColor}
                    />
                )
            }
		},
		locks:{
			screen:LocksScreen,
            path:'/locks',
            navigationOptions:{
                title:'管理门锁',
                tabBarLabel:'管理门锁',
                tabBarIcon:({tintColor,focused})=>(
                    <Icon 
                        name={focused?'ios-lock':'ios-lock-outline'}
                        size={26}
                        color={tintColor}
                    />
                )
            }
		},
	},
	{
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazy:true,
        initialRouteName:'Home',
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor:'#ee7357',
            activeBackgroundColor:'#fff',
            inactiveTintColor:'#ADADAD',
            inactiveBackgroundColor:'#fff',
            labelStyle:{
                fontSize:12
            }
        }
    }
)



export default TabNav