import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { offers } from '../assets/dummy';
import HeroSectionCard from './HeroSectionCard';



const { width } = Dimensions.get('window');

const renderItem = ({ item }) => (
  <HeroSectionCard item={item} totalItems={offers.length}/>
);
const HeroSection = () => {

  return (
    <View>
       <FlatList 
        data={offers}
        horizontal={true}
        // showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        
       />
    </View>
  )
}

export default HeroSection

const styles = StyleSheet.create({
    gradient:{
        padding:10,
        borderRadius:10
    },
    cardContainer: {
      // marginHorizontal: 10, // Adds some horizontal spacing between cards
      width:"100%",
      display:'flex',
      flexDirection:"column",
      alignItems:'center',
      justifyContent:'center',

    },
    container: {
      flexDirection: 'row',
      
    },
    
})