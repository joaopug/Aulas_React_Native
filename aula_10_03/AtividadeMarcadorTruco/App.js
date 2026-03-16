import { StatusBar } from "expo-status-bar";
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function App() {
  const [numero, setNumero] = useState(0)

  const aumentarNumero = () => {
    setNumero(numero + 1)
  }
  const diminuirNumero = () => {
    setNumero(numero - 1)
  }
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={require('./assets/logouni2.png')}
          style={styles.logo}
        />
        <View style={styles.texto}>
          <Text style={styles.texto}>Marcador:</Text>
          <Text style={[styles.texto, { fontSize: 70 }]}>{numero}</Text>
        </View>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: "#239600" }]} onPress={aumentarNumero}>
          <Text style={styles.operador}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: "#8d0c03f8" }]} onPress={diminuirNumero}>
          <Text style={styles.operador}>-</Text>
        </TouchableOpacity>
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

  texto: {
    alignItems: "center",
    fontSize: 25,
    gap: 50,
    marginTop: 15,
    fontFamily: "Roboto"
  },

  logo: {
    width: 200,
    height: 100,
  },

  info: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 160
  },

  botoes: {
    flexDirection: "row",
    gap: 50
  },

  botao: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  operador: {
    color: "#fff",
    fontSize: 30
  }
});
