import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const StylistCard = ({item,handleIsSelected,isSelected}) => {
    
  return (
    <TouchableOpacity onPress={()=>{
      handleIsSelected(item)
    }} style={{
        backgroundColor:"#242531",
        padding:10,
        borderWidth:1,
        borderColor:item.id===isSelected?.id && "#FEBA43",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        height:130,
        width:110,
        marginRight:20,
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }}>
        <Image source={{uri:item.img}} height={60} width={60} style={{
            borderRadius:50
        }}/>
      <Text style={{
        fontSize:16,
        marginTop:5,
        fontWeight:'600',
        color:"#FFFFFF"
      }}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default StylistCard

const styles = StyleSheet.create({})