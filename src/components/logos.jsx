import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CircleLogos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://w7.pngwing.com/pngs/504/395/png-transparent-logo-nasa-insignia-design-graphics-nasa-miscellaneous-blue-pin.png",
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
    width: 60,
    height: 60,
    borderRadius: 30, // Hace el contenedor circular
    overflow: "hidden", // Asegura que la imagen no se salga del contenedor circular
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30, // Hace la imagen circular
  },
  logo2: {
    width: 60,
    height: 60,
    borderRadius: 30, // Hace la imagen circular
  },
});

export default CircleLogos;
