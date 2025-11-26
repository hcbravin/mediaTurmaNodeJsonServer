import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import api from '../servicos/api'
import EstudanteItem from '../componentes/EstudanteItem'
import FabBotao from '../componentes/FabBotao'

export default function TelaHome({ navigation }){

  const [alunos, setAlunos] = useState([])
  const [carregando, setCarregando] = useState(true)

  const carregarAlunos = async () => {
    try {
      setCarregando(true)
      const resposta = await fetch(api.alunos)
      const data = await resposta.json()
      setAlunos(data)

    } catch(erro) {
      Alert.alert("Erro", "Não foi possível carregar os alunos.")
      console.error(erro)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregarAlunos()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      carregarAlunos();
    }, [])
  );

  const excluirAluno = async (id) => {
    try {
      await fetch(`${api.alunos}/${id}`, { method: 'DELETE' })
      carregarAlunos()
    
    } catch(erro) {
      Alert.alert('Erro', 'Não foi possível excluir o estudante.')
      console.error(erro)
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    }
  })

  return (
    <View style={styles.container}>
      {carregando ? (
        <Text>Carregando alunos ...</Text>
      ): (
        <FlatList 
          data={alunos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <EstudanteItem 
              aluno={item}
              onEditar={() => navigation.navigate("Novo Aluno", { aluno: item })}
              onExcluir={() => excluirAluno(item.id)}
            />
          )}
        />
      )}
    </View>
  )
}