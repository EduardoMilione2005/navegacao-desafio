import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tecnologias() {
  const navigation = useNavigation();

  const noticias = [
    {
      titulo: 'Brasil volta ao top 10 mundial em investimentos em TI',
      conteudo:
        'O país registrou crescimento de 13,9% no setor de tecnologia em 2024, ultrapassando a média global e entrando entre as dez nações que mais investem em TI.',
    },
    {
      titulo: 'Mercado de TI no Brasil cresce impulsionado por IA e nuvem',
      conteudo:
        'A previsão para 2025 é de crescimento acima de 15%, com destaque para automação, segurança digital e soluções baseadas em nuvem.',
    },
    {
      titulo: 'Brasil sobe 15 posições em índice global de prontidão digital',
      conteudo:
        'O país avançou em governança e uso de tecnologia, mostrando progresso significativo na inclusão e acesso digital.',
    },
    {
      titulo: 'Gigantes de tecnologia expandem operações no Brasil',
      conteudo:
        'Empresas internacionais de automação e inteligência artificial estão ampliando centros de inovação no país, especialmente nos setores de saúde e finanças.',
    },
    {
      titulo: 'Projeto brasileiro desenvolve IA em português',
      conteudo:
        'Uma parceria entre universidades federais e grandes empresas está criando um modelo de inteligência artificial treinado exclusivamente na língua portuguesa.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tecnologia</Text>

      {noticias.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.noticia}
          onPress={() => navigation.navigate('Detalhe', {item, tipo: 'Tecnologia'})}
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
    color: '#007BFF',
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
