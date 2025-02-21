import { Tabs } from 'expo-router';
import React from 'react';
import {ChartBar, MapPinned, CircleFadingPlus, CircleUser, AtSign, Radar} from 'lucide-react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff6347' // Added # for valid hex color
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <ChartBar color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MapPinned color={color} size={24} />
          )        }}
      />
            <Tabs.Screen
        name="camera"
        options={{
          title:"Post",
          tabBarIcon: ({ color, focused }) => (
            <CircleFadingPlus color={color} size={30} />
          )
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'friends',
          tabBarIcon: ({ color, focused }) => (
            <AtSign color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="radar"
        options={{
          title: 'Local Chat',
          tabBarIcon: ({ color, focused }) => (
            <Radar color={color} size={24} />
          )
        }}
      />
    </Tabs>
  );
}
