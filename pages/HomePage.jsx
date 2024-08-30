import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import HeroSection from '../components/HeroSection'
import Appointments from '../components/Appointments'
import TotalSaloon from '../components/TotalSaloon'

const HomePage = () => {
  return (
    <View style={styles.background}>
        <View style={{ paddingBottom: 10 }}>
          <Header />
        </View>
        <View style={{ paddingBottom: 10 }}>
          <Searchbar />
        </View>
        <ScrollView style={{
          flex:1
        }}>
          <View style={{ paddingBottom: 10 }}>
            <HeroSection />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
              <Text style={{
                fontSize:14,
                fontWeight:'500',
                color:"#F6F6F6",
                marginBottom:10
              }}>Upcoming Appointments</Text>
              <TouchableOpacity>
                <Text style={{
                  fontSize:14,
                  fontWeight:'500',
                  color:"#FEBA43"
                }}>See All</Text>
              </TouchableOpacity>
            </View>
              <Appointments />
          </View>

          <View style={{ paddingBottom: 10 }}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
              <Text style={{
                fontSize:14,
                fontWeight:'500',
                color:"#F6F6F6",
                marginBottom:10
              }}>Near By Saloon</Text>
            </View>
              <TotalSaloon />
          </View>
        </ScrollView>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#0D0D12",
        height:"100%",
        width:"100%",
        padding:5,
        paddingLeft:10,
        paddingRight:10,
        flex:1
    }
})