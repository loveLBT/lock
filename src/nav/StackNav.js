import React,{ Component } from 'react'
import { StackNavigator } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'

import TabNavScreen from './TabNav'
import LoginScreen from '../containers/Login/Login'
import LoadingScreen from '../containers/Login/Loading'

const StackNav=StackNavigator(
	{	Loading:{
			screen:LoadingScreen
		},
		Login:{
            screen:LoginScreen
        },
		TabNav:{
			screen:TabNavScreen
		},
	},
	{
		initialRouteName:'TabNav',	
		mode:'card',
        headerMode:'float',
        transitionConfig:(()=>({
            screenInterpolator:CardStackStyleInterpolator.forHorizontal
        })),
        navigationOptions:{
        	headerStyle:{
        		backgroundColor:'#000',
        	},
        	headerTitleStyle:{
	            color:'white',
	            fontSize:18,
	        },
	        headerTintColor:'#fff',
        }
	}
)



export default StackNav