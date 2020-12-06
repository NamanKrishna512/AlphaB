import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import MyHeader from '../components/MyHeader';
export default class Userhome extends React.Component{
    render(){
        return(
            <View>
                     <MyHeader title="Alpha Bio Solutions" navigation ={this.props.navigation}/>
                
            </View>
        )
    }
}