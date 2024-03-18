import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import LoginScreen from '../Screen/LoginScreen/LoginScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    
      <Tab.Navigator screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name='home' component={HomeScreen}>

        </Tab.Screen>
        <Tab.Screen name='favorite' component={FavoriteScreen}>
            
        </Tab.Screen>
        <Tab.Screen name='profile' component={ProfileScreen}>
            
        </Tab.Screen>
       
      </Tab.Navigator>
    
  )
}