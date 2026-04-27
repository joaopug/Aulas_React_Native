import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(async () => {
    try {
      const resposta =
        await fetch('https://jsonplaceholder.typicode.com/posts');
      const dados = await resposta.json();
      setDados(dados);
    } catch (erro) {
      console.error('Erro ao buscar dados:', erro);
    } finally {
      setLoading(false);
    }
  }, []);


  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    )
  }


  return (
    <View syle={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'Bold'
  }
});
