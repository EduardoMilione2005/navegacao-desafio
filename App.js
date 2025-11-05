import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Tecnologia from './screens/noticias/Tecnologia';
import Esportes from './screens/noticias/Esportes';
import Detalhe from './screens/noticias/Detalhe';
import Sobre from './screens/Sobre';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NoticiasTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tecnologia') iconName = 'hardware-chip-outline';
          else if (route.name === 'Esportes') iconName = 'football-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1976D2',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Tecnologia" component={Tecnologia} />
      <Tab.Screen name="Esportes" component={Esportes} />
    </Tab.Navigator>
  );
}

function NoticiasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={NoticiasTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1976D2' },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen
          name="Notícias"
          component={NoticiasStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
