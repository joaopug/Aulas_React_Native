import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [minhaLista, setMinhaLista] = useState([])

  const [nome, setNome] = useState("")

  const addNome = () => {
    const novoNome = {
      id: Date.now().toString(),
      nome: nome,
    };
    console.log(nome)
    setMinhaLista([novoNome, ...minhaLista])
    setNome("");
  }

  return (
    <View style={styles.container}>

      <Text>Meus contatos</Text>

      <TextInput
        placeholder='Mamãe'
        value={nome}
        onChangeText={setNome}
      />


      <FlatList
        data={minhaLista}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.nome}</Text>}

      />
      <TouchableOpacity
        onPress={addNome}
        style={styles = { marginBottom: 500 }}
      >
        <Text>aa</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },


});
