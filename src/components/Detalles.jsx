import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
const Detalle = () => {
  const navigation = useNavigation();
  const { params: info } = useRoute();
  useEffect(() => {
    console.log(info);
  }, []);
  const handleNav = () => {
    navigation.navigate("asteroides");
  };
  if (!info) {
    return (
      <View>
        <Text>Información no disponible</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Nombre: {info.info.name}</Text>
      <Text>Magnitud Absoluta: {info.info.absolute_magnitude_h}</Text>
      <Text>
        Peligroso: {info.info.is_potentially_hazardous_asteroid ? "Sí" : "No"}
      </Text>
      <Text>
        Diámetro Estimado (km):{" "}
        {info.info.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
        {info.info.estimated_diameter.kilometers.estimated_diameter_max}
      </Text>
      {info.info.close_approach_data.length > 0 && (
        <View>
          <Text>Próximo Acercamiento:</Text>
          <Text>
            Fecha: {info.info.close_approach_data[0].close_approach_date_full}
          </Text>
          <Text>
            Distancia (km):{" "}
            {info.info.close_approach_data[0].miss_distance.kilometers}
          </Text>
          <Text>
            Velocidad (km/h):{" "}
            {
              info.info.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            }
          </Text>
          <Text>
            Cuerpo Orbitante: {info.info.close_approach_data[0].orbiting_body}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#6200ee",
  },
  appBarButton: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default Detalle;
