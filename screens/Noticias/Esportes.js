import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Esportes() {
  const navigation = useNavigation();

  const noticias = [
    {
      titulo: 'Brasil vence a final da Copa América Feminina 2025',
      conteudo:
        'Em Quito, após empate por 4 a 4, o Brasil venceu a Colômbia nos pênaltis por 5 a 4, conquistando o nono título da competição.',
    },
    {
      titulo: 'Carlo Ancelotti é confirmado como técnico da Seleção Brasileira',
      conteudo:
        'O lendário treinador italiano será o primeiro estrangeiro a assumir o comando da Seleção principal do Brasil.',
    },
    {
      titulo: 'Brasil renova contrato com Nike até 2038',
      conteudo:
        'A parceria com a fornecedora de material esportivo será ampliada para 13 anos, valendo cerca de 100 milhões de dólares por temporada.',
    },
    {
      titulo: 'Novo estádio do Santos homenageará Pelé',
      conteudo:
        'O clube anunciou um projeto moderno com capacidade para 30 mil pessoas, substituindo a histórica Vila Belmiro.',
    },
    {
      titulo: 'Brasil conquista bicampeonato mundial de Beach Soccer',
      conteudo:
        'A seleção brasileira venceu o torneio de 2025 com grande desempenho, consolidando-se como potência mundial na modalidade.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Esportes</Text>

      {noticias.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.noticia}
          onPress={() => navigation.navigate('Detalhe', {item, tipo:'Esportes'})}
        >
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.conteudo}>{item.conteudo.substring(0, 80)}...</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#28A745',
    marginBottom: 16,
    textAlign: 'center',
  },
  noticia: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conteudo: {
    fontSize: 14,
    color: '#555',
  },
});
