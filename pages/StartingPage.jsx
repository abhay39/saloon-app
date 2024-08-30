import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React from 'react'

const StartingPage = ({navigation}) => {
  setTimeout(()=>{
    navigation.replace('tabsContainer') // Navigate to HomeScreen after 2 seconds
  },2000)
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://images.squarespace-cdn.com/content/v1/5fd787d32a8a4a2604b22b5d/a1a982a2-8886-4017-a735-3fde5aeab145/msbs-barbershop-perspective-22000.jpg" }}
        style={styles.imageBackground}
      >
        <View style={styles.content}>
          <Text style={{fontWeight:'600', color:'white',fontSize:18,textAlign:'center'}}>Welcome to</Text>
          <Text style={{fontWeight:'600', color:'white',fontSize:35,letterSpacing:1.4}}>Saloon Hub</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default StartingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0D12',
      },
      imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center', // Optional: Adjust content positioning within the background
        alignItems: 'center',     // Optional: Adjust content positioning within the background,
        opacity:0.6
      },
      content:{
        position:'absolute',
        bottom:3,
      }
})