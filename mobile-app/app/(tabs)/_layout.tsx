import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/atoms/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon emoji="🍓" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="cheese"
        options={{
          title: 'Cheese',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon emoji="🧀" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="caesar-salad"
        options={{
          title: 'Ceasar Salad',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon emoji="🥬" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon emoji="🤳" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
