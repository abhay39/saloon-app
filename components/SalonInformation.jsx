import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Stylists } from '../assets/dummy';
import StylistCard from './StylistCard';


const dummyInfo=[
  {
    id:1,
    name:"Message",
    icon:<MaterialCommunityIcons name="message-text-outline" size={18} color="#FEBA43"/>
  },
  {
    id:2,
    name:"Call",
    icon:<Feather name="phone-call" size={18} color="#FEBA43"/>
  },
  {
    id:3,
    name:"Location",
    icon:<EvilIcons name="location" size={18} color="#FEBA43"/>
    
  },
  {
    id:4,
    name:"Share",
    icon:<Feather name="share-2" size={18} color="#FEBA43"/>
  },
]

const SalonInformation = () => {
  return (
    <View style={styles.background}>
      <View style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10
      }}>
          {
            dummyInfo.map(item=>(
              <TouchableOpacity key={item.id} style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
                  <View style={{backgroundColor:"#242531",borderRadius:16,padding:16,width:71,height:64,marginRight:10,display:'flex',alignItems:'center',justifyContent:"center"}}>
                    {item.icon}
                  </View>
                  <Text style={{
                    fontSize:14,
                    fontWeight:"400",
                    color:"#A7ABB6"
                  }}>{item.name}</Text>
                </TouchableOpacity>
            ))
          }
      </View>
      <View style={{
        borderWidth:1,
        borderColor:"#30353A",
        width:"100%",
        marginTop:20
      }}></View>

  <Text style={{
    fontWeight:'600',
    fontSize:15,
    color:"#D8D8E3",
    marginTop:10,
    padding:10
  }}>Stylists</Text>

<View style={{
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10
}}>
  
  {
    Stylists.map((item, index) => {
      return (
        <View key={index} style={{
          backgroundColor: "#242531",
          padding: 10,
          borderWidth: 1,
          // borderColor: item.id === isSelected?.id && "#FEBA43",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          height: 130,
          width: "30%", // Adjusted to fit three items in a row
          marginBottom: 10, // Add margin bottom to create space between rows
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center'
        }}>
          <Image source={{ uri: item.img }} height={60} width={60} style={{
            borderRadius: 50
          }} />
          <Text style={{
            fontSize: 16,
            marginTop: 5,
            fontWeight: '600',
            color: "#FFFFFF"
          }}>{item.name}</Text>
        </View>
      )
    })
  }
</View>

    </View>
  )
}

export default SalonInformation

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0D0D12",
    height: "100%",
    width: "100%",
    flex: 1,
    padding:10
}
})