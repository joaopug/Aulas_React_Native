import { StatusBar } from "expo-status-bar";
import { useState } from 'react'
import { StyleSheet, View, Image } from "react-native";
import ContadorTime from "./contadorTime";

export default function App() {
  const [numeroNos, setNumeroNos] = useState(0)
  const [numeroEles, setNumeroEles] = useState(0)
  const [vitoriasNos, setVitoriasNos] = useState(0)
  const [vitoriasEles, setVitoriasEles] = useState(0)


  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
        <Image
          source={require('./assets/logouni2.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.contadores}>
        <ContadorTime
          numeroNos={numeroNos}
          setNumeroNos={setNumeroNos}
          numeroEles={numeroEles}
          setNumeroEles={setNumeroEles}
          vitoriasNos={vitoriasNos}
          setVitoriasNos={setVitoriasNos}
          vitoriasEles={vitoriasEles}
          setVitoriasEles={setVitoriasEles}
          time="Nós"
        />
        <ContadorTime
          numeroNos={numeroNos}
          setNumeroNos={setNumeroNos}
          numeroEles={numeroEles}
          setNumeroEles={setNumeroEles}
          vitoriasNos={vitoriasNos}
          setVitoriasNos={setVitoriasNos}
          vitoriasEles={vitoriasEles}
          setVitoriasEles={setVitoriasEles}
          time="Eles"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    fontSize: 200
  },

  imagem: {
    marginTop: 50,
  },

  logo: {
    width: 200,
    height: 100,
  },

  contadores: {
    flexDirection: "row",
    gap: 50,
    marginTop: 10
  }
});
