import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/21/21601.png' }}
        style={styles.imagem}
      />
      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido com o objetivo de apresentar notícias de forma simples e organizada, divididas em categorias como Tecnologia e Esportes.
      </Text>
      <Text style={styles.texto}>
        O projeto utiliza React Native com Expo, integrando navegação por abas, drawer e rotas empilhadas, proporcionando uma experiência fluida e intuitiva ao usuário.
      </Text>
      <Text style={styles.texto}>
        A ideia é demonstrar na prática o uso de componentização, navegação entre telas e estilização no desenvolvimento mobile.
      </Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  imagem: { width: 100, height: 100, marginBottom: 20 },
  texto: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
