import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TecnologiaStack from './TecnologiaStack';
import EsportesStack from './EsportesStack';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Tecnologia"
        component={TecnologiaStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="computer" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Esportes"
        component={EsportesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-soccer" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}