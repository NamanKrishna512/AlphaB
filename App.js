import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import EmployeeSignIn from './Screens/EmployeeSignIn'
import Userhome from './Screens/Userhome'
import WelcomeScreen from './Screens/WelcomeScreen'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
 import { MyHeader } from './components/MyHeader'
export default class App extends React.Component{
  render(){
    return(
      
<AppContainer/>
      
    )
  }
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
Drawer:{screen:AppDrawerNavigator},
MyHeader:{screen:MyHeader},
EmployeeSignIn:{screen:EmployeeSignIn},
Userhome:{screen:Userhome},
})
const AppContainer = createAppContainer(AppNavigator)