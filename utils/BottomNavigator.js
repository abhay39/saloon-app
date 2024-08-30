import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import BeautyParlor from '../pages/BeautyParlor';
import Messages from '../pages/Messages';
import Account from '../pages/Account';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: "#FEBA43",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 14,
        },
        tabBarStyle: {
          position: 'absolute',
          paddingVertical: 10, 
          height: 70, 
          backgroundColor: '#201F27', 
          borderTopWidth: 0, 
        },
        
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Beauty Parlor" 
        component={BeautyParlor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="map-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Message" 
        component={Messages}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="message-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={Account}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
