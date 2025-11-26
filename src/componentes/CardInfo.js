import { View, Text, StyleSheet } from "react-native";

export default function CardInfo({ titulo, subtitulo, valor, colunas, isTablet }) {
  return (
    <View style={[styles.card, { width: !isTablet ? '100%' : `${(100 / colunas) - 5 }%` }]}>
      <View>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#d8d8d8',
      borderRadius: 8
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 2,
  },
  subtitulo: {
    fontSize: 12
  },
  valor: {
    fontSize: 22,
    color: "#333",
  }
});
