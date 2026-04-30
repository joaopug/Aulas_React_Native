import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, FlatList } from 'react-native';
import listajogos from './env/copa_mundo_2026_jogos_brasilia_com_estadios.json';
import { MapaBandeiras } from './componentes/mapa_bandeiras.js';


export default function App() {
  const [calendario, setCalendario] = useState([]);

  useEffect(() => {

  }, [])

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}`;
  }

  const agruparJogos = (jogos) => {
    const grupos = {};
    jogos.forEach(jogo => {
      if (!grupos[jogo.data_et]) {
        grupos[jogo.data_et] = [];
      }
      grupos[jogo.data_et].push(jogo);
    });
    return Object.keys(grupos).map((data) => ({
      data,
      jogos: grupos[data]
    }));;
  }

  console.log(MapaBandeiras)

  const dadosAgrupados = agruparJogos(listajogos.jogos);


  return (
    <ImageBackground
      source={require('./assets/bg-overlay.png')}
      style={styles.container}
      resizeMode='cover'
    >
      <Image
        source={require('./assets/unicopa.png')}
        style={styles.logo}
      />
      <Text
        style={styles.titulo}
      >Calendário</Text>
      <FlatList
        data={dadosAgrupados}
        keyExtractor={(item) => item.data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.card}>

              <Text style={styles.data}>
                {formatarData(item.data)}
              </Text>
              
              {item.jogos.map((jogo) => (
                <View key={jogo.id} style={{ marginBottom: 10 }}>

                  <View style={styles.grupoETimes}>
                    <Text>GRUPO {jogo.grupo}</Text>
                    <Text>{jogo.time_casa} x {jogo.time_fora}</Text>
                  </View>

                  <View style={styles.times}>
                    <Image
                      source={MapaBandeiras[jogo.sigla_casa]}
                      style={{ width: 40, height: 30 }}
                    />
                    <Text>{jogo.sigla_casa}</Text>

                    <View style={styles.horarioEVersus}>
                      <Text>{jogo.hora_et}</Text>
                      <Text>VS</Text>
                    </View>

                    <Text>{jogo.sigla_fora}</Text>
                    <Image
                      source={MapaBandeiras[jogo.sigla_fora]}
                      style={{ width: 40, height: 30 }}
                    />
                  </View>

                  <View style={styles.locais}>
                    <Text>{jogo.estadio}</Text>
                    <Text>{jogo.cidade} • {jogo.pais}</Text>
                  </View>

                </View>
              ))}

            </View>

          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'darkblue',
    alignItems: 'center',
    margin: 0
  },
  logo: {
    marginTop: 0,
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 30
  },
  titulo: {
    fontSize: 24,
    color: 'white',
  },
  card: {
    width: 300,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  grupoETimes: {
    flexDirection: 'row',
    gap: 10,
  },
  times: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horarioEVersus: {
    alignItems: 'center',
  },
  locais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
