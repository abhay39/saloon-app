import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';



const Header = () => {
  return (
    <View style={{display:'flex', alignItems:'center',justifyContent:'space-between',flexDirection:"row",}}>
      <View>
        <Text style={styles.title}>Hi, Abhay Kumar Gupta</Text>
        <View style={{display:'flex',flexDirection:'row',gap:2, alignItems:'center'}}>
          <Icon name="location-outline" size={16} color="#FEBA43" />
          <Text style={styles.location}>Karwal Nagar</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.noto}>
        <Icon name="notifications-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    title:{
        fontWeight:'600',
        color:"white",
        fontSize:18
    },
    location:{
        fontWeight:'400',
        color:"white",
        fontSize:14
    },
    noto:{
      backgroundColor:'#1A1B25',
      padding:10,
      borderRadius:50
    }
})