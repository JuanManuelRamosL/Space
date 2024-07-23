import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const images = [
  "https://www.lavanguardia.com/andro4all/hero/2023/08/asteroide-psyche-2.png?width=768&aspect_ratio=16:9&format=nowebp",
  "https://www.lavanguardia.com/andro4all/hero/2024/02/asteroide-solitario.png?width=768&aspect_ratio=16:9&format=nowebp",
  "https://i.blogs.es/f73810/asteroide/450_1000.jpg",
  "https://via.placeholder.com/150/FFFF00https://phantom-marca-mx.unidadeditorial.es/d315ae99cc2fc1628b03042cd031b1dd/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/09/21/16953119213997.jpg",
  "https://www.publico.es/uploads/2023/09/24/65105795a43f2.jpeg",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Detalle = () => {
  const navigation = useNavigation();
  const { params: info } = useRoute();
  const [randomImage, setRandomImage] = useState(getRandomImage);

  useEffect(() => {
    console.log(info);
  }, []);

  if (!info) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Información no disponible</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{ uri: randomImage }} style={styles.image} />
        <Text style={styles.title}>Nombre: {info.info.name}</Text>
        <Text style={styles.text}>
          Magnitud Absoluta: {info.info.absolute_magnitude_h}
        </Text>
        <Text style={styles.text}>
          Peligroso: {info.info.is_potentially_hazardous_asteroid ? "Sí" : "No"}
        </Text>
        <Text style={styles.text}>
          Diámetro Estimado (km):{" "}
          {info.info.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
          {info.info.estimated_diameter.kilometers.estimated_diameter_max}
        </Text>
        {info.info.close_approach_data.length > 0 && (
          <View style={styles.approachContainer}>
            <Text style={styles.subtitle}>Próximo Acercamiento:</Text>
            <Text style={styles.text}>
              Fecha: {info.info.close_approach_data[0].close_approach_date_full}
            </Text>
            <Text style={styles.text}>
              Distancia (km):{" "}
              {info.info.close_approach_data[0].miss_distance.kilometers}
            </Text>
            <Text style={styles.text}>
              Velocidad (km/h):{" "}
              {
                info.info.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              }
            </Text>
            <Text style={styles.text}>
              Cuerpo Orbitante: {info.info.close_approach_data[0].orbiting_body}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  approachContainer: {
    marginTop: 20,
  },
  errorText: {
    color: "#FF0000",
    fontSize: 18,
  },
});

export default Detalle;
