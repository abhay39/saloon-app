import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const Searchbar = () => {
  return (
    <View style={styles.bg}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10,
        }}>
            <Icon name="search-outline" size={24} color="#A4ACB9" />
            <TextInput placeholder='Search' placeholderTextColor={"#A4ACB9"} style={{
                color:'white'
            }} />
        </View>
        <TouchableOpacity>
            <FontAwesome6 name="sliders" size={24} color="#A4ACB9" />
        </TouchableOpacity>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    bg:{
        padding:6,
        borderRadius:10,
        backgroundColor:'#1A1B25',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})