import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#6366f1',
          tabBarInactiveTintColor: '#6b7280',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: t('common.search'),
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="magnify" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: t('common.favorites'),
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="trips"
          options={{
            title: t('common.trips'),
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="car" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="inbox"
          options={{
            title: t('common.inbox'),
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="message" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: t('common.more'),
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="dots-horizontal" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}