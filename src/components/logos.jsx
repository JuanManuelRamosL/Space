import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CircleLogos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://wallpapers.com/images/hd/n-a-s-a-logo-vector-jeeukd3n89gdpppp.jpg",
          }} // Reemplaza con la URL del primer logo
          style={styles.logo}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/474x/3e/f4/ac/3ef4ac8fd8e4459ab2c03ac01cda518a.jpg",
          }} // Reemplaza con la URL del segundo logo
          style={styles.logo2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#000000",
  },
  logoContainer: {
    width: 80,
    height: 60,
    borderRadius: 30, // Hace el contenedor circular
    overflow: "hidden", // Asegura que la imagen no se salga del contenedor circular
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 58,
    height: 58,
    borderRadius: 30, // Hace la imagen circular
  },
  logo2: {
    width: 110,
    aspectRatio: 1, // Mantiene la relación de aspecto
    height: "auto", // Ajusta la altura automáticamente según el ancho
  },
});

export default CircleLogos;
