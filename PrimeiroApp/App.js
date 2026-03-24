import { StatusBar } from "expo-status-bar";
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from "react-native";

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
      <Text>Contador de valores: </Text>
      <Text>{numero}</Text>
      <Button title="Aumentar" onPress={aumentarNumero} />
      <Button title="Diminuir" onPress={diminuirNumero} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
