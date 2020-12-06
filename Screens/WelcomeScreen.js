import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View>
                 <Image
              style={{
                width: 160,
                height: 105,
                marginLeft: 125,
                marginTop: 28,
              }}
              source={require('../assets/logo-1.png')}
            />
            <TouchableOpacity>
            <Text style={styles.texas}>Are You The Admin?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.texas2}>Are You An Employee Of Alpha Bio Solutions?</Text>
            </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('Userhome')}}>
              <Text style={styles.texas3}>Are You A User?</Text>
          </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texas:{
        marginTop:45,
        color:'#4263f5',
        fontSize:18,
fontStyle:'italic',
marginLeft:110
    },
    texas2:{
        marginTop:45,
        color:'#4263f5',
        fontSize:18,
fontStyle:'italic',
marginLeft:30
    },
    texas3:{
        marginTop:45,
        color:'#4263f5',
        fontSize:18,
fontStyle:'italic',
marginLeft:125
    }
})
