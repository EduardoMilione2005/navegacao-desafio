import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.imagem} />
      <Text style={styles.texto}>Mini App de Notícias desenvolvido com React Native e Expo.</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  imagem: { width: 150, height: 150, marginBottom: 20 },
  texto: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});