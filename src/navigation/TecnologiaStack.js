import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TecnologiaListScreen from '../screens/TecnologiaListScreen';
import DetalheNoticiaScreen from '../screens/DetalheNoticiaScreen';

const Stack = createStackNavigator();

export default function TecnologiaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaTecnologia" component={TecnologiaListScreen} options={{ title: 'Tecnologia' }} />
      <Stack.Screen name="DetalheTecnologia" component={DetalheNoticiaScreen} />
    </Stack.Navigator>
  );
}