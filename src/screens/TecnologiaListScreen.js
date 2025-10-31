import React from 'react';
import { FlatList } from 'react-native';
import CardNoticia from '../components/CardNoticia';
import noticias from '../data/noticias';

export default function TecnologiaListScreen({ navigation }) {
  const noticiasTecnologia = noticias.filter(n => n.categoria === 'tecnologia');

  return (
    <FlatList
      data={noticiasTecnologia}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <CardNoticia
          titulo={item.titulo}
          imagem={item.imagem}
          resumo={item.resumo}
          onPress={() => navigation.navigate('DetalheTecnologia', { noticia: item })}
        />
      )}
    />
  );
}
