import { use, useEffect, useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ActivityIndicator, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { BarChart, PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";



import api from "../servicos/api";
import CardInfo from '../componentes/CardInfo'

export default function TelaEstatistica() {

  const [alunos, setAlunos] = useState([])
  const [carregando, setCarregando] = useState(true)

  const { width } = useWindowDimensions()
  const isTablet = width > 700;
  const colunas = (width > 700 ? 3 : (width > 500 ? 2 : 1))

  useEffect(() => {
    carregarAlunos()
  }, [])

  const carregarAlunos = async () => {
    try {
      const resposta = await fetch(api.alunos)
      const data = await resposta.json()
      setAlunos(data)

    } catch (erro) {
      Alert.alert('Erro', 'Erro ao tentar carregar os estudantes')
      console.error(erro)

    } finally {
      setCarregando(false)
    }
  }

  const calcularMedia = (aluno) => {
    return (aluno.n1 + aluno.n2 + aluno.n3) / 3
  }

  const mediaGeral = alunos.length ? (alunos.reduce((acc, a) => acc + calcularMedia(a), 0) / alunos.length).toFixed(2) : 0
  const maiorMedia = alunos.length ? Math.max(...alunos.map(a => calcularMedia(a))).toFixed(2) : 0
  const menorMedia = alunos.length ? Math.min(...alunos.map(a => calcularMedia(a))).toFixed(2) : 0
  const aprovados = alunos.filter(a => calcularMedia(a) >= 7).length
  const reprovados = alunos.filter(a => calcularMedia(a) < 7).length

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
    tituloGrafico: {
      fontWeight: 'bold',
      marginTop: 0,
      width: (isTablet ? width * 0.85 : width - 40),
      marginHorizontal: 'auto',
      fontFamily: 'System'
    },
    carregando: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    viewCard: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 16,
      marginBottom: 20
    }
  })

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" />
        <Text>Calculando Estatística...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        <Ionicons name="pie-chart" size="auto" /> Estatistica da Turma
      </Text>

      <View style={styles.viewCard}>
        <CardInfo titulo="Aprovados" subtitulo="Quantidade de estudantes com média maior ou igual à 7" valor={aprovados} colunas={2.08} isTablet={isTablet} />
        <CardInfo titulo="Reprovados" subtitulo="Quantidade de estudantes com média menor que 7" valor={reprovados} colunas={2.08} isTablet={isTablet} />
      </View>
      <View style={styles.viewCard}>
        <CardInfo titulo="Média Geral" subtitulo="Média geral das médias dos estudantes" valor={mediaGeral} colunas={3} isTablet={isTablet} />
        <CardInfo titulo="Maior Média" subtitulo="Maior média de estudante obtida" valor={maiorMedia} colunas={3} isTablet={isTablet} />
        <CardInfo titulo="Menor Média" subtitulo="Menor média de estudante obtida" valor={menorMedia} colunas={3} isTablet={isTablet} />
      </View>

      <View style={styles.tituloGrafico}>Média dos Estudantes</View>
      <BarChart
        data={{
          labels: alunos.map((a, i) => String(a.nome.split(' '))),
          datasets: [
            {
              data: alunos.map(a => ((a.n1 + a.n2 + a.n3) / 3).toFixed(1))
            }
          ]
        }}
        width={(isTablet ? width * 0.85 : width - 40)}
        height={220}
        fromZero
        maxValue={10}
        yAxisInterval={1}
        withInnerLines={true}
        showValuesOnTopOfBars
        verticalLabelRotation={0}
        segments={5}
        decimalPlaces={1}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1,
          color: () => "#1e12bbff",
          labelColor: () => "#000",
          propsForLabels: { fontSize: 10 },
          barPercentage: 0.5,
          paddingLeft: 20,
          propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: "rgba(0, 0, 0, 0.2)",
            strokeDasharray: "5, 5" 
          }
        }}
        style={{
          borderRadius: 12,
          alignSelf: 'center'
        }}
      />


    </View>
  )
}

