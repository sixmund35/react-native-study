import { Tabs, useRouter } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { IconButton } from '@/components/ui/IconButton';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="all-places"
        options={{
          title: 'All Places',
          tabBarIcon: ({ color }) => <FontAwesome size={16} name="map-pin" color={color} />,
          headerRight: () => (
            <IconButton
              name="add"
              size={24}
              onPress={() => router.navigate({ pathname: '/favorite-place/add-place' }, { relativeToDirectory: true })}
            />
          ),
        }}
      />
    </Tabs>
  );
}
