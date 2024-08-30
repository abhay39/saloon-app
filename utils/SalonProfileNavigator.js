import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SalonInformation from '../components/SalonInformation';
import Reviews from '../components/Reviews';

const Tab = createMaterialTopTabNavigator();

const SalonProfileNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,

      tabBarActiveTintColor: "#FEBA43",
      tabBarInactiveTintColor: "gray",
      tabBarLabelStyle: {
        fontWeight: '400',
        fontSize: 14,
      },
      tabBarIndicatorStyle:{
        
        borderBottomColor: '#FEBA43',
        borderWidth: 2
      },
      tabBarStyle: {
        backgroundColor: "#0D0D12",
      }
    }}>
      <Tab.Screen options={{
        tabBarIcon: () => null, 
      }} name='Info' component={SalonInformation} />
      <Tab.Screen options={{
        tabBarIcon: () => null,
      }} name='Review' component={Reviews} />
      <Tab.Screen options={{
        tabBarIcon: () => null, 
      }} name='Services' component={SalonInformation} />
    </Tab.Navigator>
  )
}

export default SalonProfileNavigator

const styles = StyleSheet.create({})