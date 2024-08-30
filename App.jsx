import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './utils/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#0D0D12"} />
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
