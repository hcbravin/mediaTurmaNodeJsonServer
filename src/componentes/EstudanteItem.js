import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'

export default function EstudanteItem({ aluno, onEditar, onExcluir }) {

    const media = ((aluno.n1 + aluno.n2 + aluno.n3) / 3).toFixed(1)
    const { width } = useWindowDimensions()
    const isTablet = width > 700;

    const styles = StyleSheet.create({
        card: {
            flexDirection:  isTablet ? 'row' : 'column',
            justifyContent: 'space-between',
            padding: 15,
            marginVertical: 7,
            backgroundColor: '#d8d8d8',
            borderRadius: 8,
        },
        nome: {
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 4,
        },
        botoes: {
            flexDirection:'row',
            gap: 10,
            marginTop: isTablet ? 0 : 10
        },
        btnEditar: {
            padding: 8,
            backgroundColor: '#ffc107',
            borderRadius: 5,
            width: 75,
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#997304',
        },
        btnExcluir: {
            padding: 8,
            backgroundColor: '#E53935',
            borderRadius: 5,
            width: 75,
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#721c1a'
        },
        btnMedia: {
            padding: 8,
            backgroundColor: '#c4c8cf',
            borderRadius: 5,
            paddingTop: 12,
            fontWeight: 'bold',
            textAlign: 'center',
            width: isTablet ? 150 : '100%',
            borderWidth: 0.125,
            borderColor: '#999',
            borderStyle: 'dashed'
        },
        txtBtn: {
            color: '#fff',
            fontWeight: 'bold',
            marginTop: 7,
            textAlign: 'center'
        },
        viewNotas: {
            flexDirection: 'row',
            gap: 3
        },
        textNotas: {
            borderWidth: 0.5,
            paddingHorizontal: 7,
            paddingVertical: 1,
            borderRadius: 3,
            backgroundColor: '#eee',
            width: 50,
            textAlign: 'center'
        },
        textMedia: {
            marginStart: 10,
            borderWidth: 0.5,
            paddingHorizontal: 7,
            paddingVertical: 1,
            borderRadius: 3,
            backgroundColor: '#d6d6d6',
            fontWeight: 'bold',
            width: 50,
            textAlign: 'center'
        }

    })

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.nome}>{aluno.nome}</Text>
                <View style={styles.viewNotas}>
                    <Text style={styles.textNotas}>{aluno.n1}</Text>
                    <Text style={styles.textNotas}>{aluno.n2}</Text>
                    <Text style={styles.textNotas}>{aluno.n3}</Text>
                    <Text style={styles.textMedia}>{media}</Text>
                </View>
            </View>

            <View style={styles.botoes}>
                <Text style={[styles.btnMedia, media < 7 && {backgroundColor: '#f3c4c4', color: '#734444'}, media >= 7 && {backgroundColor: '#8fdb8a', color: '#4e814b'}]}>{media >= 7 ? 'Aprovado' : 'Reprovado'}</Text>

                <TouchableOpacity style={styles.btnEditar} onPress={onEditar}>
                    <Text style={[styles.txtBtn, {color: '#896703'}]}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnExcluir} onPress={onExcluir}>
                    <Text style={[styles.txtBtn, {color: '#fff'}]}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

