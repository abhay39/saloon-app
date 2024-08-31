import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'

const ServicesCard = ({item}) => {
    // console.log(item)

    const [handleToogle,setHandleToogle]=useState(false);

    const handle=()=>{
        setHandleToogle(!handleToogle);
    }

  return (
    <View style={{
        flex:1,
        borderWidth:1,
        borderRadius:15,
        borderColor:"#3F4042",
        marginBottom:20,
        padding:10,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }}>
      <View>
        <Text style={{
            fontSize:16,
            fontWeight:'600',
            color:"#D8D8E3"
        }}>{item.name}</Text>
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            marginBottom:5,
            marginTop:10
        }}>
            <Text style={{
                fontSize:12,
                fontWeight:'500',
                color:"#FFB900"
            }}>Rs. {item.price}</Text>
            <Text style={{
                fontSize:12,
                fontWeight:'500',
                color:"#D8D8E3"
            }}> - {item.time} Min</Text>
        </View>
      </View>
      <View>
      <TouchableOpacity onPress={handle}>
            {
                handleToogle ? (<Fontisto name="toggle-on" size={32} color="#FEAF18" />) : (<Fontisto name="toggle-off" size={32} color="white" />)
            }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ServicesCard

const styles = StyleSheet.create({})