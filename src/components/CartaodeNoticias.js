src/components/CardNoticia.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartaodeNoticias({ titulo, imagem, resumo, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text numberOfLines={2}>{resumo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', margin: 8, padding: 10, borderRadius: 8, elevation: 2 },
  imagem: { width: '100%', height: 150, borderRadius: 8 },
  titulo: { fontSize: 16, fontWeight: 'bold', marginVertical: 4 },
});