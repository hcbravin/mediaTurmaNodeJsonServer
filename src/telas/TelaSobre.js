import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import CardInfo from "../componentes/CardInfo";
import { Ionicons } from '@expo/vector-icons'; 

export default function TelaSobre() {

  const { width } = useWindowDimensions()
  const isTablet = width > 700;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}><Ionicons name="information-circle-outline" size="auto" /> Sobre o Aplicativo</Text>

      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido como parte da avaliação da Pós-Graduação em Desenvolvimento Full Stack, com o objetivo de demonstrar o uso de:
      </Text>

      <View style={styles.viewCard}>
        <CardInfo titulo="React Native" colunas={3} isTablet={isTablet} />
        <CardInfo titulo="Navegação com Bottom Tabs" colunas={3} isTablet={isTablet} />
        <CardInfo titulo="Consumo de API com JSON Server" colunas={3} isTablet={isTablet} />
        <CardInfo titulo="CRUD Completo" colunas={3} isTablet={isTablet} />
        <CardInfo titulo="Tela Responsiva" colunas={3} isTablet={isTablet} />
        <CardInfo titulo="Componentização" colunas={3} isTablet={isTablet} />
      </View>

      <Text style={styles.rodape}>
        Desenvolvido por Henrique Casagrande
        {"\n"}Versão 1.0
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "flex-start"
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 16,
    color: "#333",
    marginBottom: 30
  },
  viewCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16
  },
  rodape: {
    marginTop: 40,
    fontSize: 14,
    color: "#666",
    textAlign: "center"
  }
})