import { Text, View, StyleSheet } from "react-native"
import Botao from './botao'

export default function ContadorTime({ time, numeroNos, setNumeroNos, numeroEles, setNumeroEles }) {
    const placarParaExibir = time === "Nós" ? numeroNos : numeroEles;
    return (
        <View style={styles.info}>
            <Text style={styles.texto}>{time}</Text>
            <Text style={[styles.texto, { fontSize: 70 }]}>{placarParaExibir}</Text>
            <View style={styles.botoes}>
                <Botao
                    time={time}
                    cor="#239600"
                    simbolo="+"
                    numeroNos={numeroNos}
                    setNumeroNos={setNumeroNos}
                    numeroEles={numeroEles}
                    setNumeroEles={setNumeroEles}
                />
                <Botao
                    time={time}
                    simbolo="-"
                    cor="#a50303"
                    numeroNos={numeroNos}
                    setNumeroNos={setNumeroNos}
                    numeroEles={numeroEles}
                    setNumeroEles={setNumeroEles}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },

    texto: {
        alignItems: "center",
        fontSize: 25,
        fontFamily: "Roboto",
        marginTop:20
    },

    botoes: {
        flexDirection: "row",
        gap: 40,
        marginTop: 60
    },
})