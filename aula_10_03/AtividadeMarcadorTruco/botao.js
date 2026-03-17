import { TouchableOpacity, StyleSheet, Text } from "react-native";
export default function Botao({ simbolo, time, tipo, numeroNos, setNumeroNos, numeroEles, setNumeroEles }) {
    const fazer = (simbolo, time) => {
        const ehNos = time === "Nós";
        const valorAtual = ehNos ? numeroNos : numeroEles;
        const setValor = ehNos ? setNumeroNos : setNumeroEles;

        const tipoValores = {
            "+": 1,
            "TRUCO": 3,
            "SEISSS": 6,
            "NOVEEE": 9,
            "DOZI": 12
        }

        if (simbolo === "-" && valorAtual > 0) {
            setValor(valorAtual - 1);
        } else if (valorAtual < 12) {
            const pontosASomar = tipoValores[simbolo] || 0
            const resultado = valorAtual + pontosASomar
            setValor(resultado > 12 ? 12 : resultado);
        }

    }

    const tiposEstilo = {
        1: { backgroundColor: "#01633d", width: 60 },
        2: { backgroundColor: "#860929", width: 60 },
        3: { backgroundColor: "#015c63", width: 160, marginTop: 10 },
        4: { backgroundColor: "#012363", width: 160, marginTop: 10 },
        5: { backgroundColor: "#4f0163", width: 160, marginTop: 10 },
        6: { backgroundColor: "#630103", width: 160, marginTop: 10 },
    }

    return (
        <TouchableOpacity
            style={[styles.botao, tiposEstilo[tipo]]}
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