import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhes({ route }) {
  const navigation = useNavigation();
  const { item, tipo } = route.params;
  const { titulo, conteudo } = item;

  useLayoutEffect(() => {
    navigation.setOptions({ title: titulo });
  }, [navigation, titulo]);

  const irParaTecnologia = () => {
    navigation.navigate('Tabs', { screen: 'Tecnologia' });
  };

  const irParaEsportes = () => {
    navigation.navigate('Tabs', { screen: 'Esportes' });
  };

  return (
    <View style={styles.page}>
      <ScrollView style={styles.container}>
        <Text style={styles.tipo}>{tipo}</Text>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.conteudo}>{conteudo}</Text>
      </ScrollView>

      <View style={styles.bottomTabs}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={irParaTecnologia}
        >
          <Ionicons
            name="hardware-chip-outline"
            size={22}
            color={tipo === 'Tecnologia' ? '#1976D2' : '#999'}
            style={styles.icon}
          />
          <Text
            style={[
              styles.tabText,
              { color: tipo === 'Tecnologia' ? '#1976D2' : '#999' },
            ]}
          >
            Tecnologia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={irParaEsportes}
        >
          <Ionicons
            name="football-outline"
            size={22}
            color={tipo === 'Esportes' ? '#1976D2' : '#999'}
            style={styles.icon}
          />
          <Text
            style={[
              styles.tabText,
              { color: tipo === 'Esportes' ? '#1976D2' : '#999' },
            ]}
          >
            Esportes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  tipo: {
    fontSize: 13,
    color: '#999',
    marginBottom: 4,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conteudo: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  bottomTabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 6,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
