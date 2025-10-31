import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import SobreScreen from '../screens/SobreScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Notícias"
        component={TabsNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={SobreScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}