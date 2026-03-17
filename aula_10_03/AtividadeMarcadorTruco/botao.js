import { TouchableOpacity, StyleSheet, Text } from "react-native";
export default function Botao({ simbolo, cor, time, numeroNos, setNumeroNos, numeroEles, setNumeroEles }) {
    const fazer = (simbolo, time) => {
        if (time === "Nós") {
            if (simbolo === "+" && numeroNos < 12) {
                setNumeroNos(numeroNos + 1)
            } else if (simbolo === "-" && numeroNos > 0) {
                setNumeroNos(numeroNos - 1)
            }
        } else
            if (simbolo === "+" && numeroEles < 12) {
                setNumeroEles(numeroEles + 1)
            } else if (simbolo === "-" && numeroEles > 0) {
                setNumeroEles(numeroEles - 1)
            }
    }

    return (
        <TouchableOpacity
            style={[styles.botao, { backgroundColor: cor }]}
            onPress={() => fazer(simbolo, time)}
        >
            <Text style={styles.operador}>{simbolo}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    botao: {
        width: 60,
        height: 50,
        alignItems: "center",
        borderRadius: 12,
        justifyContent: "center"
    },

    operador: {
        color: "#fff",
        fontSize: 30
    }
})