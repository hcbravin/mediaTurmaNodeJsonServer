import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function FabBotao({ onPress }){

    const styles = StyleSheet.create({
        fab: {
            position: 'absolute',
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#0066ff',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 4
        },
        texto: {
            color: '#fff',
            fontSize: 22
        }
    })

    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
    )
}