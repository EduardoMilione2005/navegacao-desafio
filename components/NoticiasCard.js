import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoticiasCard({ titulo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '600',
  },
})