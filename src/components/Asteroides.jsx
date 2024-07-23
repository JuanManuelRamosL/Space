import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import useStore from "../../store";

const Asteroides = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dataAsteroide, setDataAsteroide } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DqJYj39DoKjmHTbN7xlqRqwGTTD3sBDRCBtO5c0r"
        );
        const limitedResults = response.data.near_earth_objects.slice(0, 7);
        setDataAsteroide(limitedResults);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Error: {error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }
  const navigation = useNavigation();
  const handleNavDetail = (info) => {
    navigation.navigate("detalles", { info });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Asteroides mas relevantes</Text>
        {dataAsteroide && dataAsteroide.length > 0 ? (
          <FlatList
            data={dataAsteroide}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.asteroidContainer}>
                <Text onPress={() => handleNavDetail(item)}>
                  Nombre: {item.name}
                </Text>
                <Text>Magnitud Absoluta: {item.absolute_magnitude_h}</Text>

                <Text>
                  Peligroso:{" "}
                  {item.is_potentially_hazardous_asteroid ? "Sí" : "No"}
                </Text>
                <Text>
                  Diámetro Estimado (km):{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_max}
                </Text>
                {item.close_approach_data.length > 0 && (
                  <View>
                    <Text>Próximo Acercamiento:</Text>
                    <Text>
                      Fecha:{" "}
                      {item.close_approach_data[0].close_approach_date_full}
                    </Text>
                    <Text>
                      Distancia (km):{" "}
                      {item.close_approach_data[0].miss_distance.kilometers}
                    </Text>
                    <Text>
                      Velocidad (km/h):{" "}
                      {
                        item.close_approach_data[0].relative_velocity
                          .kilometers_per_hour
                      }
                    </Text>
                  </View>
                )}
                <Button
                  title="Detalles"
                  onPress={() => handleNavDetail(item)}
                ></Button>
              </View>
            )}
          />
        ) : (
          <Text>No data available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  asteroidContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: "90%",
  },
});

export default Asteroides;
