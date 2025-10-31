import React, { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetalheNoticiaScreen({ route, navigation }) {
  const { noticia } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: noticia.titulo });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image source={noticia.imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.conteudo}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  imagem: { width: '100%', height: 200, borderRadius: 8 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
  conteudo: { fontSize: 16, textAlign: 'justify' },
});