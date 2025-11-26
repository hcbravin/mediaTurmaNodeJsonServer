import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import api from '../servicos/api'

export default function TelaEstudanteForm({ route, navigation }) {

  const alunoEditado = route.params?.aluno ?? null;
  const { width } = useWindowDimensions()
  const isTablet = width > 700;
  

  const [nome, setNome] = useState("")
  const [n1, setN1] = useState("")
  const [n2, setN2] = useState("")
  const [n3, setN3] = useState("")

  useEffect(() => {
    if(alunoEditado){
      setNome(alunoEditado.nome)
      setN1(String(alunoEditado.n1))
      setN2(String(alunoEditado.n2))
      setN3(String(alunoEditado.n3))
    }
  }, [])

  const SalvarAluno = async () => {
    if(!nome || !n1 || !n2 || !n3) {
      return Alert.alert("Erro","Preencha todos os campos!")
    }

    const novoAluno = {
      nome: nome,
      n1: Number(n1),
      n2: Number(n2),
      n3: Number(n3)
    }

    try {
      if(alunoEditado) {
        await fetch(`${api.alunos}/${alunoEditado.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(novoAluno)
        })
      
      } else {
        
        await fetch(api.alunos, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(novoAluno)
        })
      }

      setNome("");
      setN1("");
      setN2("");
      setN3("");
      navigation.navigate("Inicio")
    
    } catch(erro) {
      Alert.alert("Erro","Não foi possível salvar o novo aluno.")
      console.error(erro)

    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20
    },
    viewInput: {
      flexDirection: isTablet ? 'row' : 'column',
      justifyContent: 'center', //'space-between',
      alignItems: 'center',
      gap: isTablet ? 20 : 2
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 12,
      borderRadius: 6,
      marginBottom: 12,
      width: isTablet ? ((width * 0.5) / 3) - 12 : '100%',
      textAlign: 'center'
    },
    inputNome: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 6,
        marginBottom: 12,
        width: isTablet ? (width * 0.5) : '100%',
        alignSelf: 'center'
      },

    botao: {
      backgroundColor: '#0066ff',
      padding: 15,
      borderRadius: 6,
      marginTop: 20,
      width: isTablet ? 150 : '100%',
      alignSelf: 'flex-end',
      marginRight: isTablet ? (width * 0.235) : 0,

    },
    textoBotao: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold'
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        <Ionicons name={alunoEditado ? "person-add" : "person"} size="auto" /> 
        {alunoEditado ? " Editar Aluno" : " Cadastrar Aluno"}
      </Text>

      
        <TextInput 
          style={styles.inputNome}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

      <View style={styles.viewInput}>
        <TextInput 
          style={styles.input}
          placeholder="Nota 1"
          keyboardType="numeric"
          value={n1}
          onChangeText={setN1}
        />

        <TextInput 
          style={styles.input}
          placeholder="Nota 2"
          keyboardType="numeric"
          value={n2}
          onChangeText={setN2}
        />

        <TextInput 
          style={styles.input}
          placeholder="Nota 3"
          keyboardType="numeric"
          value={n3}
          onChangeText={setN3}
        />
      </View>

        <TouchableOpacity style={styles.botao} onPress={SalvarAluno}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
      

    </View>
  );

}

