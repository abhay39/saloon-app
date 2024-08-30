import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import saloons from '../assets/dummy'
import SaloonCard from './SaloonCard'

const TotalSaloon = () => {
  return (
    <View style={{
        flex:1,
        marginBottom:50
    }}>
      <FlatList 
        data={saloons}
        keyExtractor={(saloon) => saloon.id.toString()}
        renderItem={({ item }) => (
          <SaloonCard item={item}/>
        )}
      />
    </View>
  )
}

export default TotalSaloon

const styles = StyleSheet.create({})