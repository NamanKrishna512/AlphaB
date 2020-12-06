import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSideBarMenu';
import Userhome from '../Screens/Userhome'
import WelcomeScreen from '../Screens/WelcomeScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : Userhome
    },
  WelcomeScreen : {
    screen : WelcomeScreen
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })