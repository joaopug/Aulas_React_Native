import { Text, View, StyleSheet } from "react-native"
import Botao from './botao'

export default function ContadorTime({ time, numeroNos, setNumeroNos, vitoriasNos, setVitoriasNos, numeroEles, setNumeroEles, vitoriasEles, setVitoriasEles }) {
    const placarParaExibir = time === "Nós" ? numeroNos : numeroEles;
    const vitoriasParaExibir =  time === "Nós" ? vitoriasNos : vitoriasEles
    return (
        <View style={styles.info}>
            <Text style={styles.texto}>{time}</Text>
            <Text style={[styles.texto, { fontSize: 70 }]}>{placarParaExibir}</Text>
            <Text>{vitoriasParaExibir}</Text>
            <View style={styles.botoes}>
                <View style={styles.maisMenos}>
                    <Botao
                        time={time}
                        simbolo="+"
                        tipo={1}
                        numeroNos={numeroNos}
                        setNumeroNos={setNumeroNos}
                        numeroEles={numeroEles}
                        setNumeroEles={setNumeroEles}
                        vitoriasNos={vitoriasNos}
                        setVitoriasNos={setVitoriasNos}
                        vitoriasEles={vitoriasEles}
                        setVitoriasEles={setVitoriasEles}
                    />
                    <Botao
                        time={time}
                        simbolo="-"
                        tipo={2}
                        numeroNos={numeroNos}
                        setNumeroNos={setNumeroNos}
                        numeroEles={numeroEles}
                        setNumeroEles={setNumeroEles}
                        vitoriasNos={vitoriasNos}
                        setVitoriasNos={setVitoriasNos}
                        vitoriasEles={vitoriasEles}
                        setVitoriasEles={setVitoriasEles}
                    />
                </View>
                <Botao
                    time={time}
                    simbolo="TRUCO"
                    tipo={3}
                    numeroNos={numeroNos}
                    setNumeroNos={setNumeroNos}
                    numeroEles={numeroEles}
                    setNumeroEles={setNumeroEles}
                />
                <Botao
                    time={time}
                    simbolo="SEISSS"
                    tipo={4}
                    numeroNos={numeroNos}
                    setNumeroNos={setNumeroNos}
                    numeroEles={numeroEles}
                    setNumeroEles={setNumeroEles}
                />
                <Botao
                    time={time}
                    simbolo="NOVEEE"
                    tipo={5}
                    numeroNos={numeroNos}
                    setNumeroNos={setNumeroNos}
                    numeroEles={numeroEles}
                    setNumeroEles={setNumeroEles}
                />
                <Botao
                    time={time}
                    simbolo="DOZI"
                    tipo={6}
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
        marginTop: 20
    },

    maisMenos: {
        flexDirection: "row",
        gap: 40,
        marginTop: 60
    },
})