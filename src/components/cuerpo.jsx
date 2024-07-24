import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const SimpleComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cápsula Dragon de SpaceX</Text>
        <Text style={styles.text}>
          La cápsula Dragon de SpaceX es una nave espacial avanzada diseñada
          para transportar carga y astronautas desde y hacia la Estación
          Espacial Internacional (ISS). Desde su primer vuelo en 2010, Dragon se
          ha convertido en un componente crucial de las misiones espaciales de
          reabastecimiento, demostrando una fiabilidad y eficiencia
          excepcionales. La versión tripulada, Dragon 2, ha llevado astronautas
          al espacio como parte del programa Commercial Crew de la NASA,
          marcando un hito en la historia de los vuelos espaciales comerciales.
          Con su diseño reutilizable, la cápsula Dragon continúa innovando en la
          exploración espacial y estableciendo nuevos estándares para el
          transporte orbital seguro y eficiente.
        </Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/e0/86/2f/e0862faf18c5748ba02378effb98bbcf.jpg",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Starship de SpaceX</Text>
        <Text style={styles.text}>
          La Starship de SpaceX es una nave espacial revolucionaria diseñada
          para llevar humanos y carga a destinos como la Luna, Marte y más allá.
          Con su capacidad de reutilización total y un diseño avanzado, la
          Starship promete reducir significativamente los costos de los viajes
          espaciales y abrir nuevas posibilidades para la exploración del
          espacio profundo. Actualmente en fase de desarrollo y prueba, esta
          nave de próxima generación está destinada a transformar el futuro de
          la exploración espacial y los vuelos interplanetarios.
        </Text>
        <Image
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/436/491/675/night-stars-rocket-spaceship-spacex-hd-wallpaper-preview.jpg",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  card: {
    backgroundColor: "#000000",
    borderRadius: 10,
    padding: 20,
    margin: 16,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "left",
    lineHeight: 22,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default SimpleComponent;
